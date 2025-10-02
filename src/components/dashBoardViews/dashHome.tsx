import React from 'react'
import { UserProfile } from '../../Types/types';
import { useEffect } from 'react';

const DashboardHome = ({ userProfile }: { userProfile: UserProfile }) => {
    
    useEffect(() => {
    console.log('userProfile loaded:', userProfile);
  }, [userProfile]);
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-white"> Hello {userProfile?.firstName ?? 'Friend'}!</h1>
      <p className="text-gray-300">Welcome to your dashboard.</p>
    </>
  );
};

export default DashboardHome;
