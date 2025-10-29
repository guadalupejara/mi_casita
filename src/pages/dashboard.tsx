'use client';

import React, { useState, useEffect } from 'react';
import SideNav from '../components/navbar/sideNavBar'
import { UserProfile, Note } from '../Types/types';
import DashHome from '../components/dashBoardViews/dashHome'
import Settings from '../components/dashBoardViews/settings'
import DarkTransparentCard from '../components/common/darkTransparentCard';
import StickyNotesBoard from './stickyNotesBoard';

interface DashboardPageProps {
  userProfile: UserProfile;
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  reloadUserProfile: () => Promise<void>;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ userProfile, reloadUserProfile, notes, setNotes }) => {
  // In the future this URL will come from Firebase
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string | null>(null);
  const [view, setView] = useState<'home' | 'settings' | 'stickyNotesBoard'>('home');

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      const simulatedURL = 'bird.jpg'// Replace with dynamic URL from backend
      setBackgroundImageUrl(simulatedURL);
    };

    fetchBackgroundImage();
  }, []);


const renderView = () => {
    switch (view) {
      case 'home':
        return <DashHome userProfile={userProfile} />;
      case 'stickyNotesBoard':
        return <StickyNotesBoard userProfile={userProfile} notes={notes} setNotes={setNotes}/>;
      case 'settings':
        return <Settings userProfile={userProfile} reloadUserProfile={reloadUserProfile}/>;
      default:
        return null;
    }
  };

  return (
     <div
      className="w-screen min-h-screen bg-cover bg-center flex items-center justify-center transition-all duration-500"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
        backgroundColor: backgroundImageUrl ? undefined : '#111827',
      }}
    >
      <div className='w-[90%] max-w-6xl h-[80%]'>
      <DarkTransparentCard>{renderView()}</DarkTransparentCard>
      </div>
      <SideNav setView={setView} />
    </div>
  );
};

export default DashboardPage;