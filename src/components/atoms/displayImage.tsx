import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type DisplayType = {
  img: StaticImageData;
  altText: string;
};

const DisplayImage = ({ img, altText }: DisplayType) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      <div className='w-80 h-80 rounded-lg drop-shadow-lg shadow-lg'>
        <Image src={img} alt={altText} fill={true} className='rounded-lg' />
      </div>
    </motion.div>
  );
};

export default DisplayImage;
