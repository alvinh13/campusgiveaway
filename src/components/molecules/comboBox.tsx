'use client';

import React, { useEffect, useState } from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/utils/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type Option = {
  value: string;
  name: string;
};

type ComboboxProps = {
  options: Option[];
  formTitle: string;
  initialValue?: string | null;
};

export function Combobox({
  options,
  initialValue = null,
  formTitle,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (initialValue != null) setValue(initialValue);
    else setValue(`Select ${formTitle}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formTitle, initialValue, options]);

  const selectedOption = options.find((option) => option.value === value);
  console.log('selectedOption', selectedOption);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {selectedOption ? selectedOption.name : `Select ${formTitle}`}
          <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search Campuses...' className='h-9' />
          <CommandEmpty>No Campuses found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                {option.name}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === option.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
