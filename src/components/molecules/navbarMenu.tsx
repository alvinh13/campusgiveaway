'use client';
import React, { ReactElement } from 'react';
import { Menu } from '@headlessui/react';
import Dropdown from '../atoms/dropdown';
import { useRouter } from 'next/navigation';

type MenuOptions = {
  name: string;
  icon?: ReactElement;
} & ({ func: () => void; link?: never } | { link: string; func?: never });

const DropdownMenu = ({ menuOptions }: { menuOptions: MenuOptions[] }) => {
  const router = useRouter();

  return (
    <Dropdown>
      {menuOptions.map((option: MenuOptions, idx: number) => {
        return (
          <Menu.Item key={idx}>
            {({ active }) => (
              <button
                onClick={() => {
                  if (option.link) router.push(option.link);
                  else if (option.func) option.func();
                }}
                className={`${
                  active ? 'bg-primary text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                {option.icon && (
                  <div className='mr-2 h-5 w-5 text-xl'>{option.icon}</div>
                )}
                <div className='text-xl px-2 font-semibold'>{option.name}</div>
              </button>
            )}
          </Menu.Item>
        );
      })}
    </Dropdown>
  );
};

export default DropdownMenu;
