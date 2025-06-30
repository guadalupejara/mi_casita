import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TransparentCard from '../components/register/transparentCard';
import RegisterForm from '../components/register/registerForm';

function Register() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background image using next/image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/door2.jpg"
          alt="background door"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
          <TransparentCard>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-4">
              Register
            </h1>
            <p className="text-gray-700 text-sm sm:text-base text-center mb-6">
              Already a user?{' '}
              <Link href="/login" className="text-orange-900 hover:underline ml-1">
                Sign in
              </Link>
            </p>
            <RegisterForm />
          </TransparentCard>
        </div>
      </div>
    </main>
  );
}

export default Register;
