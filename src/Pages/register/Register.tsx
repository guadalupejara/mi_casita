import React from 'react';
import TransparentCard from './transparentCard';
import RegisterForm from './registerForm';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <React.Fragment>
      <main
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/door2.jpg')" }}
      >
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 px-4">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
            <TransparentCard>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-4">
                Register
              </h1>
              <p className="text-gray-700 text-sm sm:text-base text-center mb-6">
                Already a user?{' '}
                <Link to="/login" className="text-orange-900 hover:underline ml-1">
                  Sign in
                </Link>
              </p>
              <RegisterForm />
            </TransparentCard>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Register;

