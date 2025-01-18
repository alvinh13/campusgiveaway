import React from 'react';
import CustomButton from '../atoms/button';

type Buttons = {
  name: string;
  type?: string;
} & ({ func: () => void; link?: never } | { link: string; func?: never });

const ButtonGroup = ({ buttons }: { buttons: Buttons[] }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-4'>
      {buttons.map((btn, idx) => {
        return <CustomButton key={idx} btn={btn} />;
      })}
    </div>
  );
};

export default ButtonGroup;
