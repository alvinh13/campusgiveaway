'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';

const InternalNavbar = () => {
  const [user, setUser] = useState({ name: '' });
  const { authDetails, setAuthDetails, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  useEffect(() => {
    setUser({
      name: authDetails.name,
    });
  }, [authDetails]);

  return (
    <div className='w-full h-20 bg-red-200 px-10'>
      <div className='w-full h-full flex justify-end items-center gap-6'>
        <div className='text-xl text-indigo-600 font-semibold'>{user.name}</div>
        <button
          className='text-xl text-amber-500 hover:text-orange-500 font-semibold border rounded-md p-1 transition-all duration-100 drop-shadow-sm'
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default InternalNavbar;
