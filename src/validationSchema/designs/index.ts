import * as yup from 'yup';

export const designValidationSchema = yup.object().shape({
  design_name: yup.string().required(),
  design_path: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
