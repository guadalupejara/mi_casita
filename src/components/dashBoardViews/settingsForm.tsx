import React from 'react'
import { Form, Field, ErrorMessage, FormikProps } from 'formik';
import { SettingsFormValues } from '../../Types/types';
import DarkTransparentCard from '../common/darkTransparentCard';
import ConfirmModal from '../common/confirmModal';
import {useState} from 'react'

interface Props {
  formik: FormikProps<SettingsFormValues>;
  onDeactivate: () => Promise<void>;
}
const settingsForm: React.FC<Props> = ({ formik, onDeactivate }) => {
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <>
         <DarkTransparentCard>
      <div className="text-white">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Info */}
          <div className="col-span-full text-lg font-semibold">Basic Info</div>

          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" className="w-full p-2 rounded bg-white/90 text-black" />
            <ErrorMessage name="firstName" component="div" className="text-red-800 text-sm" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" className="w-full p-2 rounded bg-white/90 text-black" />
            <ErrorMessage name="lastName" component="div" className="text-red-800 text-sm" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="w-full p-2 rounded bg-white/90 text-black" />
            <ErrorMessage name="email" component="div" className="text-red-800 text-sm" />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field name="phoneNumber" className="w-full p-2 rounded bg-white/90 text-black" />
            <ErrorMessage name="phoneNumber" component="div" className="text-red-800 text-sm" />
          </div>

          {/* Account Info */}
          <div className="col-span-full text-lg font-semibold mt-4">Account Info</div>

          <div>
            <label htmlFor="currentPassword">Current Password</label>
            <Field name="currentPassword" type="password" placeholder='To update enter password'className="w-full p-2 rounded bg-white/90 text-black" />
            <ErrorMessage name="currentPassword" component="div" className="text-red-800 text-sm" />
          </div>

          <div>
            <label htmlFor="newPassword">New Password</label>
            <Field name="newPassword" type="password" className="w-full p-2 rounded bg-white/90 text-black" />
            <ErrorMessage name="newPassword" component="div" className="text-red-800 text-sm" />
          </div>
          <div>
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <Field name="confirmNewPassword" type="password" className="w-full p-2 rounded bg-white/90 text-black" />
            <ErrorMessage name="confirmNewPassword" component="div" className="text-red-800 text-sm" />
          </div>

          {/* Deactivate + Submit */}
          <div className="col-span-full flex justify-between items-center mt-6">
            <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="text-red-800 underline hover:text-red-900 transition"
      >
        Deactivate Account
      </button>
       <ConfirmModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => {
          setModalOpen(false);
          onDeactivate();
        }}
        title="Confirm Deactivation"
        message="Are you sure you want to deactivate your account? This action cannot be undone."
      />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-zinc-800 transition"
            >
              Update
            </button>
          </div>
        </Form>
      </div>
    </DarkTransparentCard>
        </>
    )
}

export default settingsForm