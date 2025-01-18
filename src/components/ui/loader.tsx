import React from 'react';

const Loader = ({ padding }: { padding?: string }) => {
  return (
    <div
      className={`w-full min-h-4 flex ${
        padding ? padding : 'py-3'
      } justify-center items-center `}
    >
      <div className='loader '></div>
    </div>
  );
};

export default Loader;
