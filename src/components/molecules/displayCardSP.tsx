import React from 'react';
import SubTitleText from '../atoms/subText';
import TitleText from '../atoms/titleText';
import ParaText from '../atoms/paraText';
import DisplayImage from '../atoms/displayImage';
import { StaticImageData } from 'next/image';

type DisplayCard = {
  image: StaticImageData;
  title: string;
  subTitle: string;
  para: string;
  index: number;
};

const DisplayCardSP = ({
  image,
  title,
  subTitle,
  para,
  index,
}: DisplayCard) => {
  // console.log('key', index);
  return (
    <div className={`p-4 flex cursor-default bg-white/60 rounded-lg`}>
      <div
        className={`lg:w-2/3 min-h-72 lg:min-h-0 flex flex-col gap-3 relative`}
      >
        <div className='flex justify-center'>
          <DisplayImage img={image} altText={title} />
        </div>
        <div className='px-4  max-w-96 w-full rounded-lg'>
          <SubTitleText text={subTitle} />
          <SubTitleText text={title} color='text-customGray' />
          <ParaText text={para} />
        </div>
      </div>
    </div>
  );
};

export default DisplayCardSP;
