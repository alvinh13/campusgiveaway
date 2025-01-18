import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type DisplayType = {
  img: StaticImageData;
  altText: string;
};

export const ProductImage = ({ img, altText }: DisplayType) => {
  return (
    <div className='rounded-lg'>
      <Image src={img} alt={altText} height={240} className='rounded-lg' />
    </div>
  );
};
