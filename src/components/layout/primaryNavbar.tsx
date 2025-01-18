'use client';
//mounted is used to fix a server/client mismatch
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import useScroll from '@/lib/hooks/useScroll';
import { BRAND } from '@/constants/appConstants';
import { NAVLINKS } from '@/constants/commonConstants';
import DropdownMenu from '../molecules/navbarMenu';
import { RiLoginBoxFill } from 'react-icons/ri';
import { useCategoryState } from '@/context/categoryContext';
import CommonModal from '../atoms/commonModal';

type NavLink = {
  name: string;
  id: number;
  value: string;
  link: string;
};

const PrimaryNavbar = () => {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState({ name: '' });
  const [openModal, setOpenModal] = useState(false);

  const { authDetails, setAuthDetails, logout } = useAuth();
  const scrolled = useScroll(50);
  const router = useRouter();
  const pathname = usePathname();
  const { categoryState, categoryDispatch } = useCategoryState();
  console.log('pathname', pathname);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  useEffect(() => {
    setMounted(true);
    setUser({
      name: authDetails.name,
    });
    if (pathname != '/take') {
      categoryDispatch({ value: '', index: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authDetails, pathname]);

  const handleNavLinkClick = (option: NavLink) => {
    categoryDispatch({ index: option.id, value: option.value });
    router.push(option.link);
  };

  return (
    <div
      className={`w-full flex justify-center sticky top-0 z-20 ${
        scrolled
          ? 'border-b border-gray-200 bg-white/70 backdrop-blur-xl'
          : 'bg-white/0'
      } transition-all duration-150`}
    >
      <div className='w-full max-w-8xl h-20 px-10 text-lg text-gray-600 font-medium flex gap-4 items-center justify-between'>
        <div className=''>
          <div className='text-2xl font-bold text-emerald-600 drop-shadow-md'>
            <Link href={'/'}>{BRAND.name}</Link>
          </div>
        </div>
        <div className='hidden lg:flex gap-3 items-center'>
          {NAVLINKS.map((option, idx) => {
            return (
              <div
                key={idx}
                className={`
                ${
                  mounted && option.value === categoryState.value
                    ? 'text-primary'
                    : ''
                } 
                capitalize text-lg font-bold px-4 py-1 border-primary rounded-sm text-gray-500 hover:text-primaryLight cursor-pointer`}
                onClick={() => {
                  handleNavLinkClick(option);
                }}
              >
                {option.name}
                {/* <Link href={option.link}>{option.name}</Link> */}
              </div>
            );
          })}
        </div>
        <div className='hidden lg:flex justify-between  w-56'>
          <Link className='' href={`/give`}>
            <div
              className={`${
                '/give' === pathname
                  ? 'text-white bg-primary border-primary '
                  : ''
              } capitalize text-2xl font-bold px-4 py-1 rounded-sm  text-primaryLight hover:bg-primary hover:border-primary hover:text-white border border-primaryLight p-1 transition-all duration-100 drop-shadow-sm`}
            >
              Donate
            </div>
          </Link>
          <button
            className='text-base text-primaryLight hover:bg-primary hover:border-primary hover:text-white font-semibold border border-primaryLight rounded-sm p-1 transition-all duration-100 drop-shadow-sm'
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Sign in
          </button>
          <CommonModal
            setIsOpen={setOpenModal}
            isOpen={openModal}
            subTitle=' Sign in using your email id.'
            confirmBtnTitle='Sign In'
            confirmBtnFunction={() => {
              console.log('primary button clicked');
            }}
          >
            <div>Sign In form in progress</div>
          </CommonModal>
        </div>
        <div className='block lg:hidden'>
          <DropdownMenu
            menuOptions={[
              ...NAVLINKS,
              {
                name: 'Sign In',
                func: () => setOpenModal(true),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
