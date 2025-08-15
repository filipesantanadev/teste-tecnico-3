import { useFormValidation } from "./hooks/useFormValidation.js";
import { validationSchema } from "./components/validation.js";
import UserForm from "./components/UseForm.jsx";
import SuccessMessage from "./components/SucessMessage.jsx";

const initialFormData = {
  nome: "",
  email: "",
  telefone: "",
  senha: "",
  confirmarSenha: "",
};

const App = () => {
  const {
    formData,
    errors,
    isSubmitted,
    isLoading,
    handleInputChange,
    handleCustomChange,
    handleSubmit,
    resetForm,
  } = useFormValidation(initialFormData, validationSchema);

  if (isSubmitted) {
    return <SuccessMessage name={formData.nome} onReset={resetForm} />;
  }

  return (
    <UserForm
      formData={formData}
      errors={errors}
      isLoading={isLoading}
      onChange={handleInputChange}
      onPhoneChange={handleCustomChange}
      onSubmit={(e) => handleSubmit(e)}
    />
  );
};

export default App;
