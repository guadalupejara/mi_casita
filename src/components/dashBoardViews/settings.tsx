import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { SettingsFormValues, UserProfile } from '../../Types/types';
import SettingsForm from './settingsForm';
import { settingsValidationSchema } from '../../Schema/validationSchema';
import { updateUserProfile, deleteCurrentUser } from '../../Services/authServices';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { toast } from 'react-hot-toast';
import { toastSuccessOptions } from '../../styles/toastStyle';

interface Props {
  userProfile: UserProfile;
  reloadUserProfile: () => Promise<void>;
}

const Settings: React.FC<Props> = ({ userProfile, reloadUserProfile }) => {
  const router = useRouter();
console.log(userProfile, reloadUserProfile)
  const [initialValues, setInitialValues] = useState<SettingsFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    if (userProfile) {
      setInitialValues({
        firstName: userProfile.firstName || '',
        lastName: userProfile.lastName || '',
        email: userProfile.email || '',
        password: '',
        confirmPassword: '',
        phoneNumber: userProfile.phoneNumber || '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        originalEmail: userProfile.email || '',
      });
    }
  }, [userProfile]);

  const handleDeactivate = async () => {
    const password = prompt('Please enter your password to confirm account deletion:');
    if (!password) return;

    try {
      await deleteCurrentUser(password);
      toast.success('Account successfully deactivated.', toastSuccessOptions);
      router.push('/login');
    } catch (error: any) {
      console.error('Deactivation failed:', error);
      toast.error(error.message || 'Failed to deactivate account.');
    }
  };

  const handleSubmit = async (values: SettingsFormValues) => {
    try {
      await updateUserProfile(values);

      if (values.email !== values.originalEmail) {
        const user = auth.currentUser;
        if (user) {
          await sendEmailVerification(user);
          toast.success('Verification email sent! Please check your inbox.', toastSuccessOptions);
        }
      } else {
        toast.success('Updated successfully!', toastSuccessOptions);
        await reloadUserProfile();
      }
    } catch (error: any) {
      console.error('Update failed:', error);
      toast.error(error.message || 'Failed to update profile.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={settingsValidationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {(formik) => <SettingsForm formik={formik} onDeactivate={handleDeactivate} />}
    </Formik>
  );
};

export default Settings;
