import React from 'react';

type ParaTitleText = {
  text: string;
};

const ParaText = ({ text }: ParaTitleText) => {
  return <div className='text-base font-medium text-gray-700'>{text}</div>;
};

export default ParaText;
