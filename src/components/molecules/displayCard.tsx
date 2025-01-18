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

const DisplayCard = ({ image, title, subTitle, para, index }: DisplayCard) => {
  // console.log('key', index);
  return (
    <div
      className={`flex gap-4 lg:gap-20 justify-between items-center w-full max-w-5xl cursor-default`}
    >
      <div
        className={`w-2/3 flex flex-col gap-3  ${
          index % 2 !== 0 ? 'order-last text-end pr-10' : 'pl-10'
        }`}
      >
        <SubTitleText text={subTitle} />
        <TitleText text={title} />
        <ParaText text={para} />
      </div>
      <div>
        <DisplayImage img={image} altText={title} />
      </div>
    </div>
  );
};

export default DisplayCard;
