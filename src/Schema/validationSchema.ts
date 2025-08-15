import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});


export const logInFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

export const settingsValidationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string(),

  currentPassword: yup.string(),

  newPassword: yup
    .string()
    .min(8, 'Minimum 8 characters')
    .notRequired(),

  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
    .when('newPassword', {
      is: (val: string) => val && val.length > 0,
      then: (schema) => schema.required('Please confirm your new password'),
    }),

  // 👇 Add custom validation at the end
}).test(
  'require-current-password-if-changing',
  'Current password is required to change email or password',
  function (values) {
    const { currentPassword, newPassword, email, originalEmail } = values as any;
    const changingPassword = newPassword?.length > 0;
    const changingEmail = email !== originalEmail;

    if ((changingPassword || changingEmail) && !currentPassword) {
      return this.createError({ path: 'currentPassword' });
    }

    return true;
  }
);