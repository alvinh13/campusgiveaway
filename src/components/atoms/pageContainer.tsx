import React from 'react';

const PageContainer = ({ children }: { children: any }) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-4'>
      <div className='w-full '>{children}</div>
    </main>
  );
};

export default PageContainer;
