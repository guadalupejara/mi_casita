import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar/Navbar';
import { Toaster } from 'react-hot-toast'

// export default function MyApp({ Component, pageProps }: AppProps) {
//   const router = useRouter();

//   const publicRoutes = ['/', '/login', '/register'];
//   const showNavbar = publicRoutes.includes(router.pathname.toLowerCase());

//   return (
//     <>
//       {showNavbar && <Navbar />}
//       <Component {...pageProps} />
//       <Toaster position="top-center" />
//     </>
//   );
// }

import { useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const publicRoutes = ['/', '/login', '/register'];
  const isPublicRoute = publicRoutes.includes(router.pathname.toLowerCase());

  useEffect(() => {
    if (isPublicRoute) return;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router.pathname]);

  return (
    <>
      {isPublicRoute && <Navbar />}
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </>
  );
}
// need to create logout to test