import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type DisplayType = {
  img: StaticImageData;
  altText: string;
};

export const ProductImageSP = ({ img, altText }: DisplayType) => {
  return (
    <div className='rounded-top-lg h-52 overflow-clip'>
      <Image src={img} alt={altText} className='rounded-lg' />
    </div>
  );
};
