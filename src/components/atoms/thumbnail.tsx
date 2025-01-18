import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type Option = {
  img: StaticImageData;
  title: string;
};

const Thumbnail = ({ option }: { option: Option }) => {
  return (
    <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.98 }}>
      <div className='w-40 h-20 overflow-clip rounded-lg bg-amber-300'>
        <Image
          src={option.img}
          alt={option.title}
          height={180}
          width={180}
          className=''
        />
      </div>
    </motion.div>
  );
};

export default Thumbnail;
