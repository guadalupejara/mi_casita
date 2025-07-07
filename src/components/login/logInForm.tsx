import React, {useState} from "react";
import { Formik, Form, Field } from 'formik';
import { LogInUserInput } from "../../Types/types";
import {Eye, EyeOff} from "lucide-react";
import {logInFormSchema} from "../../Schema/validationSchema";
import { ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast'
import { toastSuccessOptions } from "../../styles/toastStyle";

const initialValues: LogInUserInput = {
  email: '',
  password: '',
};

function RegisterForm (){
const [showPassword, setShowPassword] = useState(false);

const onSubmit = (values: LogInUserInput) => {
    console.log(values)
     toast.success('Registered successfully!', toastSuccessOptions)
}

    return(
        <React.Fragment>
            <Formik initialValues={initialValues} validationSchema={logInFormSchema} onSubmit={(values) => {onSubmit(values)}}>
     <Form className="text-left">
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
        <button className="bg-zinc-950 text-white text-1xl rounded mx-auto block px-4 py-2 hover:bg-zinc-500 transition-colors duration-200 " type="submit">Log In</button>
      </Form>
            </Formik>
        </React.Fragment>
    )
}
export default RegisterForm