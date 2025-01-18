'use client';
import React from 'react';
import MainBanner from './sections/mainBanner';
import OfferItems from './sections/offerItems';

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center w-full py-6 mt-4 backdrop-circle'>
      <MainBanner />
      <OfferItems />
    </div>
  );
};

export default LandingPage;
