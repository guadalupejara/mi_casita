import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getCurrentUserProfile } from '../Services/authServices';
import { UserProfile } from '../Types/types';
import DashboardPage from './dashboard';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const publicRoutes = ['/', '/login', '/register'];
  const isPublicRoute = publicRoutes.includes(router.pathname.toLowerCase());
const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user && !isPublicRoute) {
        router.push('/login');
      } else if (user) {
        const profile = await getCurrentUserProfile();
        setUserProfile(profile);
      }
    });

    return () => unsubscribe();
  }, [router.pathname]);

  return (
    <>
      {isPublicRoute && <Navbar />}
      <Component {...pageProps} userProfile={userProfile} />
      <Toaster position="top-center" />
    </>
  );
}

export default MyApp;