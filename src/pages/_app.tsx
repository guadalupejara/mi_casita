import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar/Navbar';
import { Toaster } from 'react-hot-toast'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const publicRoutes = ['/', '/login', '/register'];
  const showNavbar = publicRoutes.includes(router.pathname.toLowerCase());

  return (
    <>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </>
  );
}