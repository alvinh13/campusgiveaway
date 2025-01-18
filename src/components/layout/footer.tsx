import React from 'react';
import SubTitleText from '../atoms/subText';
import ParaText from '../atoms/paraText';

const Footer = () => {
  return (
    <div className='py-10 px-20 lg:px-40 '>
      <SubTitleText color='text-gray-700' text='Campus Giveaway' />
      <div>
        <ParaText text='contact@campusgiveaway.com' />
      </div>
    </div>
  );
};

export default Footer;
