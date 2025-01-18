import React from 'react';
import SubTitleText from '../atoms/subText';
import TitleText from '../atoms/titleText';
import ParaText from '../atoms/paraText';
import { StaticImageData } from 'next/image';
import { ProductImage } from '../atoms/productImage';
import CustomButton from '../atoms/button';
import { motion } from 'framer-motion';

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

const DisplayProduct = ({
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
      className={`flex gap-4 lg:gap-20 justify-between items-center max-w-5xl cursor-default bg-gray-200/30 rounded-lg drop-shadow-lg`}
    >
      <div
        className={`w-2/3 flex flex-col gap-3 order-last text-end pr-10
        }`}
      >
        <SubTitleText text={subTitle} />
        <TitleText text={title} />
        <ParaText text={para} />
        <div className='place-self-right col-span-2 pt-2'>
          <CustomButton btn={contactButton} />
        </div>
      </div>
      <div className='p-2'>
        <ProductImage img={image} altText={title} />
      </div>
    </motion.div>
  );
};

export default DisplayProduct;
