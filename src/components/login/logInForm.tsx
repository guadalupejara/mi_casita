import React, {useState} from "react";
import { Formik, Form, Field } from 'formik';
import { LogInUserInput } from "../../Types/types";
import {Eye, EyeOff} from "lucide-react";
import {logInFormSchema} from "../../Schema/validationSchema";
import { ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast'
import { toastSuccessOptions } from "../../styles/toastStyle";
import { useRouter } from 'next/navigation';
import { loginUser } from '../../Services/authServices';
import { ClockLoader } from 'react-spinners';

const initialValues: LogInUserInput = {
  email: '',
  password: '',
};

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: LogInUserInput) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await loginUser(values);
      toast.success('Logged in successfully!', toastSuccessOptions);
      router.push('/dashboard');
    } catch (error: any) {
      let message = 'Failed to log in. Please try again.';
      if (error.code === 'auth/user-not-found') {
        message = 'No user found with this email.';
      } else if (error.code === 'auth/wrong-password') {
        message = 'Incorrect password.';
      } else if (error.code === 'auth/too-many-requests') {
        message = 'Too many login attempts. Try again later.';
      }
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={logInFormSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form className="text-left">
        <div className="mb-3 flex items-center space-x-3">
          <label className="w-24" htmlFor="email">
            Email
          </label>
          <Field
            className="bg-orange-900 text-white pl-1 pr-10 flex-1"
            id="email"
            name="email"
            type="text"
          />
        </div>
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-800 text-sm mt-1"
        />

        <div className="mb-3 flex items-center space-x-3">
          <label className="mr-11" htmlFor="password">
            Password
          </label>
          <div className="relative w-full">
            <Field
              className="bg-orange-900 text-white pl-1 pr-10 w-full"
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-white" />
              ) : (
                <Eye className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
        <ErrorMessage
          name="password"
          component="div"
          className="text-red-800 text-sm mt-1"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-zinc-950 text-white text-1xl rounded mx-auto block px-4 py-2 transition-colors duration-200 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-500'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <ClockLoader size={20} color="#ffffff" />
              <span>Logging in...</span>
            </div>
          ) : (
            'Log In'
          )}
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;