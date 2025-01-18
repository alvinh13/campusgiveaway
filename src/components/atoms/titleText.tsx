import React from 'react';

type TitleText = {
  text: string;
};

const TitleText = ({ text }: TitleText) => {
  return <div className='text-5xl font-extrabold text-gray-600'>{text}</div>;
};

export default TitleText;
