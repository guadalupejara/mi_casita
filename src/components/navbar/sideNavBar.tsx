'use client';

import React from 'react';
import { Home, LogOut, Cog } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { toast } from 'react-hot-toast'
import { toastSuccessOptions } from "../../styles/toastStyle";
import { SideNavProps } from '../../Types/types';

const SideNav: React.FC<SideNavProps> = ({ setView }) => {
  const router = useRouter();

const handleLogout = async () => {
  try {
    await signOut(auth);
    router.push('/login');
    toast.success('Logout successfully - Bye Bye! :)', toastSuccessOptions);
  } catch (error) {
    console.error('Logout failed:', error);
    toast.error('Logout failed. Please try again.');
  }
};


  return (
    <div className="fixed top-1/2 left-4 -translate-y-1/2 bg-zinc-900/60 rounded-full p-3 flex flex-col items-center gap-6 shadow-lg">
      {/* Home Icon */}
      <div className="group relative">
        <button
          onClick={() => setView('home')}
          className="text-white hover:text-zinc-400 transition-colors"
        >
          <Home size={24} />
        </button>
        <span className="absolute -right-28 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded shadow">
          Home
        </span>
      </div>

        {/* Settings Icon */}
      <div className="group relative">
        <button
          onClick={() => setView('settings')}
          className="text-white hover:text-zinc-400 transition-colors"
        >
          <Cog size={24} />
        </button>
        <span className="absolute -right-28 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded shadow">
          Settings
        </span>
      </div>

      {/* Logout Icon */}
      <div className="group relative">
        <button
          onClick={handleLogout}
          className="text-white hover:text-zinc-400 transition-colors"
        >
          <LogOut size={24} />
        </button>
        <span className="absolute -right-28 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded shadow">
          Logout
        </span>
      </div>
    </div>
  );
};

export default SideNav;
