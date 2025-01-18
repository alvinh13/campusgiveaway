import React from 'react';

const ListContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='py-2 bg-sky-10'>
      <div className='flex flex-col justify-center items-center gap-4'>
        {children}
      </div>
    </div>
  );
};

export default ListContainer;
