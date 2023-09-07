import * as yup from 'yup';

export const imageValidationSchema = yup.object().shape({
  image_type: yup.string().required(),
  image_path: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
