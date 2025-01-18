import React from 'react';

type SubTitleText = {
  text: string;
  props?: string;
  color?: string;
};

const SubTitleText = ({
  text,
  props,
  color = 'text-primary',
}: SubTitleText) => {
  return (
    <div className={`text-2xl font-semibold ${color} ${props}`}>{text}</div>
  );
};

export default SubTitleText;
