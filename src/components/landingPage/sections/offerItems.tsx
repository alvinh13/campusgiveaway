import React from 'react';
import { OFFEREDITEMS } from '@/constants/commonConstants';
import DisplayCard from '@/components/molecules/displayCard';
import DisplayCardSP from '@/components/molecules/displayCardSP';

const OfferItems = () => {
  return (
    <div className='max-w-7xl w-5/6  rounded-xl'>
      <div className='hidden lg:flex flex-col gap-16 justify-center items-center'>
        {OFFEREDITEMS.map((offering, idx) => {
          return (
            <DisplayCard
              key={idx}
              index={idx}
              image={offering.image}
              para={offering.para}
              subTitle={offering.name}
              title={offering.subtile}
            />
          );
        })}
      </div>
      <div className='flex lg:hidden flex-col gap-16 justify-center items-center'>
        {OFFEREDITEMS.map((offering, idx) => {
          return (
            <DisplayCardSP
              key={idx}
              index={idx}
              image={offering.image}
              para={offering.para}
              subTitle={offering.name}
              title={offering.subtile}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OfferItems;
