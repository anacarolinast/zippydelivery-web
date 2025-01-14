export const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('E-mail inválido')
      .required('E-mail é obrigatório'),
    senha: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Senha é obrigatória'),
  });
  