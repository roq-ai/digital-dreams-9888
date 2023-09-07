import * as yup from 'yup';

export const galleryValidationSchema = yup.object().shape({
  gallery_name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
