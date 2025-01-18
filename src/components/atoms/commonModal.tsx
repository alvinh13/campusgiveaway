import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

type Modal = {
  title?: string;
  subTitle?: string;
  isOpen: boolean;
  confirmBtnTitle: string;
  confirmBtnFunction: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function CommonModal({
  setIsOpen,
  isOpen,
  title,
  subTitle,
  confirmBtnTitle,
  confirmBtnFunction,
  children,
}: Modal) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center text-gray-700'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    {title}
                  </Dialog.Title>
                  <div className='mt-2 flex justify-between'>
                    <p className='text-sm text-gray-500'>{subTitle}</p>
                  </div>

                  <div className='my-4'>{children}</div>
                  <div className='flex gap-6 justify-end'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={confirmBtnFunction}
                    >
                      {confirmBtnTitle}
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
