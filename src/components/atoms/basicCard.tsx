import * as React from 'react';

type Props = { children?: React.ReactNode; bg?: string };

const BasicCard = ({ children, bg }: Props) => {
  return (
    <div
      className={`py-6 px-6 ${
        bg ? bg : 'bg-gray-200/20 '
      }drop-shadow-sm rounded-xl max-w-md min-h-80 md:max-w-xl lg:max-w-lg lg:w-screen`}
    >
      {children}
    </div>
  );
};

export default BasicCard;
