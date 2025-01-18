import React from 'react';
import SubTitleText from '../atoms/subText';
import ParaText from '../atoms/paraText';
import { StaticImageData } from 'next/image';
import CustomButton from '../atoms/button';
import { motion } from 'framer-motion';
import { ProductImageSP } from '../atoms/productImageSP';

type DisplayProduct = {
  image: StaticImageData;
  title: string;
  subTitle: string;
  para: string;
  index: number;
};

const contactButton = {
  name: 'View Contact Info',
  type: 'submit',
  func: () => {},
};

const DisplayProductSP = ({
  image,
  title,
  subTitle,
  para,
  index,
}: DisplayProduct) => {
  // console.log('key', index);
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex flex-col gap-4 justify-between items-center max-w-sm cursor-default bg-gray-200/90 rounded-lg drop-shadow-lg shadow-md border-amber-400 borde pb-4`}
    >
      <div className='relative'>
        <ProductImageSP img={image} altText={title} />
        <div className='absolute bottom-3 right-3 bg-gray-200/80 px-1 rounded-md'>
          <SubTitleText text={subTitle} />
        </div>
      </div>
      <div
        className={`flex flex-col gap-3 text-center px-2
      }`}
      >
        <SubTitleText text={title} color='text-customGray' />
        <ParaText text={para} />
        <div className='place-self-right col-span-2 pt-2'>
          <CustomButton btn={contactButton} />
        </div>
      </div>
    </motion.div>
  );
};

export default DisplayProductSP;
