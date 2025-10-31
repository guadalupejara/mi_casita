import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getCurrentUserProfile } from '../Services/authServices';
import { Note, UserProfile } from '../Types/types';
import { Atkinson_Hyperlegible, Parisienne } from 'next/font/google';
import { getNotesForUser } from '../Services/stickyNote/noteService';
import StickyNotesWidget from '../components/stickyNotesWidget/stickyNotesWidget';

const atkinson = Atkinson_Hyperlegible({ subsets: ['latin'], weight: '400', variable: '--font-atkinson' });
const parisienne = Parisienne({ subsets: ['latin'], weight: '400', variable: '--font-parisienne' });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const publicRoutes = ['/', '/login', '/register'];
  const isPublicRoute = publicRoutes.includes(router.pathname.toLowerCase());

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);

  const reloadUserProfile = async () => {
    const profile = await getCurrentUserProfile();
    setUserProfile(profile);
     console.log("reloading", userProfile)
    
  };

useEffect(() => {
  if (!userProfile?.uid) return;

  const fetchNotes = async () => {
    const userNotes = await getNotesForUser(userProfile.uid);
    setNotes(userNotes);
  };

  fetchNotes();
}, [userProfile]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user && !isPublicRoute) {
        router.push('/login');
      } else if (user) {
        await reloadUserProfile();
      }
    });

    return () => unsubscribe();
  }, [router.pathname]);

  return (
    <>
    <main className={`${atkinson.variable} ${parisienne.variable} font-sans`}>
      {isPublicRoute && <Navbar />}
      <Component
        {...pageProps}
        userProfile={userProfile}
        notes ={notes ?? []}
        setNotes={setNotes} 
        reloadUserProfile={reloadUserProfile}
      />
      <Toaster position="top-center" />
      <StickyNotesWidget notes ={notes ?? []}/>
      </main>
    </>
  );
}

export default MyApp;