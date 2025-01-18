'use client';
import React, { Fragment, ReactNode } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { RiArrowDropDownLine } from 'react-icons/ri';

type Children = {
  children: ReactNode;
  title?: string;
};

const Dropdown = ({ children, title = 'menu' }: Children) => {
  return (
    <div className=' py-1'>
      <Menu as='div' className='flex flex-col justify-center items-center'>
        <div>
          <Menu.Button className='flex gap-1 justify-center p-1 text-sm font-medium text-green-600  hover:text-primary border border-primary rounded-sm  transition-all duration-100'>
            {title}
            <RiArrowDropDownLine
              className=' h-5 w-5 text-2xl text-primary'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute top-16 rounded-md bg-white shadow-lg focus:outline-none'>
            <div className='px-1 py-1 text-right'>{children}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
