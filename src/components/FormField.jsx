import { IMaskInput } from "react-imask";

const FormField = ({
  type = "text",
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  mask,
  onAccept,
  helperText,
}) => {
  const inputProps = {
    type,
    id: name,
    name,
    value,
    onChange,
    placeholder,
    className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      error ? "border-red-500" : "border-gray-300"
    }`,
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      {mask ? (
        <IMaskInput {...inputProps} mask={mask} onAccept={onAccept} />
      ) : (
        <input {...inputProps} />
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default FormField;
