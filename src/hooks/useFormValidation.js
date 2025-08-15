import { useState } from "react";

export const useFormValidation = (initialState, validationSchema) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCustomChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e, onSuccess) => {
    if (e?.preventDefault) e.preventDefault();
    setIsLoading(true);

    try {
      await validationSchema.parseAsync(formData);
      setErrors({});
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      if (err.name === "ZodError") {
        const newErrors = err.issues.reduce((acc, error) => {
          const field = error.path[0];
          if (field) acc[field] = error.message;
          return acc;
        }, {});
        setErrors(newErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
    setIsSubmitted(false);
  };

  return {
    formData,
    errors,
    isSubmitted,
    isLoading,
    handleInputChange,
    handleCustomChange,
    handleSubmit,
    resetForm,
  };
};
