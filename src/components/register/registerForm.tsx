import React, {useState} from "react";
import { Formik, Form, Field } from 'formik';
import { RegisterUserInput } from "../../Types/types";
import {Eye, EyeOff} from "lucide-react";
import {registerFormSchema} from "../../Schema/validationSchema";
import { ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast'
import { toastSuccessOptions } from "../../styles/toastStyle";
import { useRouter } from 'next/navigation';
import { registerUser } from '../../Services/authServices';
import { ClockLoader } from "react-spinners";


const initialValues: RegisterUserInput = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function RegisterForm (){
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const router = useRouter();

const onSubmit = async (values: RegisterUserInput) => {
  if (isSubmitting) return;
  setIsSubmitting(true);

  try {
    await registerUser({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    });

    toast.success('Registered successfully!', toastSuccessOptions);
    router.push('/dashboard');
  } catch (error: any) {
    const message =
      error.code === 'auth/email-already-in-use'
        ? 'Email already in use.'
        : error.message;
    toast.error(message);
  } finally {
    setIsSubmitting(false);
  }
};
    return(
        <React.Fragment>
            <Formik initialValues={initialValues} validationSchema={registerFormSchema} onSubmit={(values) => {onSubmit(values)}}>
     <Form className="text-left">
       <div className="mb-3 flex items-center space-x-3">
  <label className="w-24" htmlFor="firstName">First Name</label>
  <Field
    className="bg-orange-900 text-white pl-1 pr-10 flex-1"
    id="firstName"
    name="firstName"
    type="text"
  />
</div>
<div>
    <div>
<ErrorMessage
  name="firstName"
  component="div"
  className="text-red-800 text-sm mt-1"
/>
</div>
</div>
<div className="mb-3 flex items-center space-x-3">
  <label className="w-24" htmlFor="lastName">Last Name</label>
  <Field
    className="bg-orange-900 text-white pl-1 pr-10 flex-1"
    id="lastName"
    name="lastName"
    type="text"
  />
</div>
<div>
<ErrorMessage
  name="lastName"
  component="div"
  className="text-red-800 text-sm mt-1"
/>
</div>
<div className="mb-3 flex items-center space-x-3">
  <label className="w-24" htmlFor="email">Email</label>
  <Field
    className="bg-orange-900 text-white pl-1 pr-10 flex-1"
    id="email"
    name="email"
    type="text"
  />
</div>
<div>
  <ErrorMessage
  name="email"
  component="div"
  className="text-red-800 text-sm mt-1"
/>
</div>
     <div className="mb-3 flex items-center space-x-3">
  <label className="mr-11" htmlFor="password">Password</label>
  <div className="relative w-full">
    <Field
      className="bg-orange-900 text-white pl-1 pr-10 w-full"
      id="password"
      name="password"
      type={showPassword ? "text" : "password"}
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
<div>
 <ErrorMessage
  name="password"
  component="div"
  className="text-red-800 text-sm mt-1"
/>
</div>
     <div className="mb-3 flex items-center space-x-3">
  <label className="mr-1" htmlFor="confirmPassword">Confirm Password</label>
  <div className="relative w-full">
    <Field
      className="bg-orange-900 text-white pl-1 pr-10 w-full"
      id="confirmPassword"
      name="confirmPassword"
      type={showConfirmPassword ? "text" : "password"}
    />
    <button
      type="button"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      className="absolute top-1/2 right-2 -translate-y-1/2"
    >
      {showConfirmPassword ? (
        <EyeOff className="w-5 h-5 text-white" />
      ) : (
        <Eye className="w-5 h-5 text-white" />
      )}
    </button>
  </div>
</div>
<div>
  <ErrorMessage
  name="confirmPassword"
  component="div"
  className="text-red-800 text-sm mt-1"
/>
</div>
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
      <span>Registering...</span>
    </div>
  ) : (
    'Register'
  )}
</button>
      </Form>
            </Formik>
        </React.Fragment>
    )
}
export default RegisterForm