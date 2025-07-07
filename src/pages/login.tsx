import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TransparentCard from '../components/common/transparentCard';
import LoginForm from '../components/login/logInForm'
function Register() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/dog.jpg"
          alt="Welcome Dog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
          <TransparentCard>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-4">
              Log In
            </h1>
            <p className="text-gray-700 text-sm sm:text-base text-center mb-6">
              New to Mi Casita?{' '}
              <Link href="/register" className="text-orange-900 hover:underline ml-1">
                Register
              </Link>
            </p>
            <LoginForm/>
          </TransparentCard>
        </div>
      </div>
    </main>
  );
}
export default Register;