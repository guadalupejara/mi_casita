import React from 'react'
import { SettingsFormValues } from '../../Types/types';
import { Formik } from 'formik';
import { settingsValidationSchema } from '../../Schema/validationSchema';
import SettingsForm from './settingsForm';
import { toastSuccessOptions } from '../../styles/toastStyle'; 
import { toast } from 'react-hot-toast'

const Settings: React.FC = () => {

  const initialValues: SettingsFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const SettingsContainer = () => {
    const handleSubmit = (values: SettingsFormValues) => {
      console.log('Form Submitted:', values);
      toast.success('Updated successfully!', toastSuccessOptions);
      // future: make API call
    };

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={settingsValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => <SettingsForm formik={formik} />}
      </Formik>
    )
  }

  return <SettingsContainer />;
}

export default Settings;
