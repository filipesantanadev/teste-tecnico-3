import { z } from "zod";

export const validationSchema = z
  .object({
    nome: z
      .string()
      .min(2, "Nome deve ter pelo menos 2 caracteres")
      .max(50, "Nome deve ter no máximo 50 caracteres")
      .nonempty("Nome é obrigatório"),
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    telefone: z
      .string()
      .regex(
        /^\(\d{2}\) \d{4,5}-\d{4}$/,
        "Telefone deve estar no formato (xx) xxxxx-xxxx"
      )
      .nonempty("Telefone é obrigatório"),
    senha: z
      .string()
      .min(6, "Senha deve ter pelo menos 6 caracteres")
      .regex(/(?=.*[a-z])/, "Senha deve conter pelo menos uma letra minúscula")
      .regex(/(?=.*[A-Z])/, "Senha deve conter pelo menos uma letra maiúscula")
      .regex(/(?=.*\d)/, "Senha deve conter pelo menos um número")
      .nonempty("Senha é obrigatória"),
    confirmarSenha: z.string().nonempty("Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas devem ser iguais",
    path: ["confirmarSenha"],
  });
