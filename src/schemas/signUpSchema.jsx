import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  cnpj: Yup.string()
    .matches(
      /^(?:\d{2}\.)?\d{3}\.\d{3}\/\d{4}-\d{2}$/, 
      'CNPJ inválido'
    )
    .required('CNPJ é obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  senha: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
});
