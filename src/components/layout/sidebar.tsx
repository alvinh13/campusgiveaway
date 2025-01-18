'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Transition } from '@headlessui/react';

import { useAuth } from '@/context/authContext';

import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import {
  adminOptions,
  employeeOptions,
  supervisorOptions,
} from '@/constants/commonConstants';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState('');
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { authDetails } = useAuth();

  useEffect(() => {
    setUser(authDetails.role);
  }, [authDetails]);

  return (
    <div
      className={`sticky mt-[5dvh] m-3 bg-gray-700 h-[90dvh] rounded-xl text-white ${
        isSidebarOpen ? 'w-72' : 'w-24'
      } p-4 transition-all duration-700 ease-in-out drop-shadow-lg shadow-md`}
    >
      <div className='w-full flex justify-end -translate-x-2.5'>
        <button
          onClick={toggleSidebar}
          className='mb-4 bg-Red drop-shadow-md shadow-md w-10 h-10 rounded-md text-indigo-700 bg-white/90'
        >
          {isSidebarOpen ? (
            <FaCaretLeft className='w-full text-3xl' />
          ) : (
            <FaCaretRight className='w-full text-3xl' />
          )}
        </button>
      </div>

      {user == 'admin' &&
        adminOptions.map((option: any, idx: number) => {
          return (
            <div
              className={`h-12 text-base font-semibold truncate flex rounded-md mt-2  mx-1 lg:mr-3  ease-in-out hover:shadow-md hover:drop-shadow-md ${
                option.link == pathname ? 'text-indigo-300' : 'text-white'
              } p-2 my-2 rounded-md`}
              key={idx}
            >
              <Link
                href={option.link}
                className='flex items-center text-base w-full'
              >
                <div className='pl-1 text-lg'>{option.icon}</div>

                <Transition
                  show={isSidebarOpen}
                  enter='transition-opacity duration-1000'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='transition-opacity duration-500'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className={`text-base px-2`}>{option.name}</div>
                </Transition>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default SideBar;

{
  /* <div className="px-4 py-2 w-40 h-screen bg-indigo-100 text-indigo-600 font-medium text-lg fixed">
SideBar
</div> */
}
