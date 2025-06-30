// src/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Define routes where you want to show the Navbar
  const publicRoutes = ['/', '/login', '/register'];
  const showNavbar = publicRoutes.includes(router.pathname.toLowerCase());

  return (
    <>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
