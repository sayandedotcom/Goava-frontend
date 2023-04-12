import * as yup from 'yup';
export const signUpSchema = yup
  .object({
    name: yup.string().required('Full Name is required'),
    email: yup
      .string()
      .required('Email is required')
      .matches(/\S+@\S+\.\S+/, 'Email is not valid'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be less than 6 character'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Pasword does not match'),
  })
  .required();

export const logInSchema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .matches(/\S+@\S+\.\S+/, 'Email is not valid'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be less than 6 character'),
  })
  .required();
