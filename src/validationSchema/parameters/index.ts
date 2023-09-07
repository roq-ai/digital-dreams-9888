import * as yup from 'yup';

export const parameterValidationSchema = yup.object().shape({
  parameter_name: yup.string().required(),
  parameter_value: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
