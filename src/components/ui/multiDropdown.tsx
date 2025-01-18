import { useState } from 'react';
import { Listbox } from '@headlessui/react';

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

export function MultiDropdown({
  people,
  selectedEmployee,
}: {
  people: any;
  selectedEmployee: any;
}) {
  const [selectedPeople, setSelectedPeople] = useState([...selectedEmployee]);

  return (
    <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
      <div className='flex flex-col gap-2'>
        <Listbox.Button className='bg-violet-200 rounded-md p-2'>
          {selectedPeople.map((person) => person.name).join(', ')}
        </Listbox.Button>
        <Listbox.Options>
          {people.map((person: any) => (
            <Listbox.Option
              key={person.id}
              value={person}
              className='bg-indigo-200 p-1 rounded m-1'
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
