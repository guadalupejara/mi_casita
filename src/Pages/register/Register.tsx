import React from 'react';
import TransparentCard from './transparentCard';
import RegisterForm from './registerForm';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <React.Fragment>
        <main className="h-screen w-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/door2.jpg')" }}>
            <div className="flex items-center justify-center h-full w-full bg-black bg-opacity-50">
               <TransparentCard>
                <h1 className="text-black text-4xl font-bold flex justify-center">Register</h1>
                <p className='text-grey-100 mb-6 flex justify-center'>Already a user? {' '}
                    <Link to="/login" className="text-orange-900 hover:underline ml-1">
                    Sign in
                    </Link>
                </p>
                <RegisterForm/>
           </TransparentCard>
            </div>
        </main>
        </React.Fragment>
    );
}

export default Register;
