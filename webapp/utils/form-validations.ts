// TODO: Needs support for localization
// Maybe ReactContext could be helpful with that
import * as yup from 'yup';
export const email = yup
  .string()
  .email('Enter a valid email')
  .required('Email is required');

export const password = yup
  .string()
  .min(8, 'Password should be of minimum 8 characters length')
  .required('Password is required');

export function validateFields(fields: Record<string, any>) {
  return yup.object(fields);
}
