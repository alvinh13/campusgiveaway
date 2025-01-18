import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

type ConfirmModal = {
  isOpen: boolean;
  setIsOpen: any;
  children: JSX.Element;
  title: string;
  subTitle?: string;
};

export default function UiModal(props: ConfirmModal) {
  const { isOpen, setIsOpen, title, subTitle, children } = props;

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
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-2xl transform overflow rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-xl font-bold text-center mb-2 text-gray-600'
                  >
                    {title}
                  </Dialog.Title>
                  {subTitle ? (
                    <div className='mt-3 text-center'>
                      <p className='text-sm text-gray-500'>{subTitle}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
