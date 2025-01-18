import React from 'react';
import Thumbnail from '../atoms/thumbnail';
import { StaticImageData } from 'next/image';

type Option = {
  img: StaticImageData;
  title: string;
  id: number;
};

const ThumbnailGroup = ({ options }: { options: Option[] }) => {
  return (
    <div className='grid grid-flow-col gap-5'>
      {options.map((option, idx) => {
        return (
          <div key={idx}>
            <Thumbnail option={option} />
            <div className='text-xl font-medium text-gray-700 text-center uppercase '>
              {option.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ThumbnailGroup;
