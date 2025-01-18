import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

type People = { id: string; name: string; userId: string }[];

export default function UiDropDown({
  people,
  selectedEmployee,
}: {
  people: People;
  selectedEmployee: any;
}) {
  const [selectedPeople, setSelectedPeople] = useState([]);

  return (
    <div className='z-[1000] w-72'>
      <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
        <div className='relative mt-1 z-[1000]'>
          <Listbox.Button className='relative z-[1000] w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>
              {selectedPeople.map((person: any) => person.name).join(', ')}
            </span>
            <span className='z-[1000] pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className=' z-[1000] absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `z-[1000] relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
