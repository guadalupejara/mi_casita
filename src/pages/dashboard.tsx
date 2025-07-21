'use client';

import React, { useState, useEffect } from 'react';
import SideNav from '../components/navbar/sideNavBar'
import { UserProfile } from '../Types/types';
import DashHome from '../components/dashBoardViews/dashHome'
import Settings from '../components/dashBoardViews/settings'
import DarkTransparentCard from '../components/common/darkTransparentCard';

const DashboardPage = ({ userProfile }: { userProfile: UserProfile }) => {
  // In the future this URL will come from Firebase
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string | null>(null);
  const [view, setView] = useState<'home' | 'settings'>('home');

  useEffect(() => {
    // Simulated fetch — replace with your actual logic (e.g., Firebase call)
    const fetchBackgroundImage = async () => {
      const simulatedURL = 'bird.jpg'//your-firebase-storage-url.com/sample-background.jpg''; // Replace with dynamic URL from backend
      setBackgroundImageUrl(simulatedURL);
    };

    fetchBackgroundImage();
  }, []);


const renderView = () => {
    switch (view) {
      case 'home':
        return <DashHome userProfile={userProfile} />;
      case 'settings':
        return <Settings />;
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