import React from 'react';
import BannerImage from '../../../../public/assets/banner-01.png';
import Image from 'next/image';
import { BRAND, PARAGRAPH } from '@/constants/appConstants';
import ButtonGroup from '@/components/molecules/buttonGroup';
import { BANNERBUTTONS } from '@/constants/commonConstants';

const MainBanner = () => {
  return (
    <div className='max-w-7xl w-5/6 lg:h-[650px] bg-white/80 rounded-xl lg:mb-20'>
      <div className='flex flex-col lg:flex-row items-center h-5/6'>
        <div className='p-6 flex flex-col gap-3 items-center justify-center text-center'>
          <div className='text-3xl md:text-5xl lg:text-7xl font-bold text-primary'>
            {BRAND.name}
          </div>
          <div className='max-w-md lg:max-w-none text-xl md:text-2xl lg:text-3xl font-semibold text-customGray'>
            {BRAND.slogan}
          </div>
          <div className=''>
            <ButtonGroup buttons={BANNERBUTTONS} />
          </div>
        </div>
        <div className='lg:w-full lg:flex lg:justify-end pt-10 overflow-clip'>
          <Image
            src={BannerImage}
            alt='Banner Image'
            width='600'
            height='800'
            className='lg:translate-x-10'
          />
        </div>
      </div>
      <div className='px-4 py-10 lg:px-20 lg:mx-16 text-xl font-medium text-center  text-customGrayLight'>
        {PARAGRAPH.bannerMessage}
      </div>
    </div>
  );
};

export default MainBanner;
