import FormField from "./FormField";

const UserForm = ({
  formData,
  errors,
  isLoading,
  onChange,
  onPhoneChange,
  onSubmit,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Cadastro de Usuário
        </h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <FormField
            type="text"
            name="nome"
            label="Nome *"
            value={formData.nome}
            onChange={onChange}
            error={errors.nome}
            placeholder="Digite seu nome completo"
          />

          <FormField
            type="email"
            name="email"
            label="E-mail *"
            value={formData.email}
            onChange={onChange}
            error={errors.email}
            placeholder="Digite seu e-mail"
          />

          <FormField
            name="telefone"
            label="Telefone *"
            value={formData.telefone}
            onAccept={(value) => onPhoneChange("telefone", value)}
            error={errors.telefone}
            placeholder="(11) 99999-9999"
            mask="(00) 00000-0000"
          />

          <FormField
            type="password"
            name="senha"
            label="Senha *"
            value={formData.senha}
            onChange={onChange}
            error={errors.senha}
            placeholder="Digite sua senha"
            helperText="A senha deve conter pelo menos 6 caracteres, incluindo maiúscula, minúscula e número"
          />

          <FormField
            type="password"
            name="confirmarSenha"
            label="Confirmar Senha *"
            value={formData.confirmarSenha}
            onChange={onChange}
            error={errors.confirmarSenha}
            placeholder="Confirme sua senha"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-lg text-white font-medium transition duration-200 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            }`}
          >
            {isLoading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
