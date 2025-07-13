'use client';

import React, { useState, useEffect } from 'react';
import SideNav from '../components/navbar/sideNavBar'
import { UserProfile } from '../Types/types';

const DashboardPage = ({ userProfile }: { userProfile: UserProfile }) => {
  // In the future this URL will come from Firebase
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Simulated fetch — replace with your actual logic (e.g., Firebase call)
    const fetchBackgroundImage = async () => {
      const simulatedURL = 'bird.jpg'//your-firebase-storage-url.com/sample-background.jpg''; // Replace with dynamic URL from backend
      setBackgroundImageUrl(simulatedURL);
    };

    fetchBackgroundImage();
  }, []);

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center transition-all duration-500"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
        backgroundColor: backgroundImageUrl ? undefined : '#111827', // Fallback background
      }}
    >
      <div className="w-[90%] max-w-6xl h-[80%] bg-black/60 bg-opacity-60 rounded-3xl shadow-2xl backdrop-blur-md p-8 text-white overflow-hidden">
        <h1 className="text-2xl font-bold mb-4">Hello {userProfile?.firstName || 'Friend'} ! Welcome to your Casita.</h1>
        <p className="text-gray-300">Your smart home dashboard.</p>
      </div>
      <div>
         <SideNav/>
      </div>
    </div>
  );
};

export default DashboardPage;