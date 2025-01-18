'use client';
import React from 'react';
import { Combobox } from '../molecules/comboBox';
import { CATEGORIES } from '@/constants/commonConstants';
import ListContainer from '../atoms/listContainer';
import { useCategoryState } from '@/context/categoryContext';
import SubTitleText from '../atoms/subText';
import { PRODUCTS } from '@/constants/productConstants';
import DisplayProductSP from '../organisms/displayProductSP';
import DisplayProduct from '../organisms/displayProduct';
import { getProducts } from '@/repositories/productRepository';

const Campuses = [
  {
    value: 'texas',
    name: 'Texas Tech',
    id: 1,
  },
];

const TakeList = ({ Products }: { Products: any }) => {
  console.log('Products', Products);
  
  const { categoryState } = useCategoryState();
  return (
    <ListContainer>
      <div className='py-6'></div>
      <div className='grid md:grid-flow-col gap-2 md:gap-6'>
        <Combobox
          options={CATEGORIES}
          formTitle='Category'
          initialValue={categoryState.value}
        />
        <Combobox
          options={Campuses}
          formTitle='Campus'
          initialValue={categoryState.value}
        />
      </div>
      <div className='max-w-5xl'>
        <SubTitleText text='Listed Items' props='py-2 '></SubTitleText>
        <div className='hidden md:block'>
          {PRODUCTS.map((item, idx) => {
            return (
              <div className='py-4' key={idx}>
                <DisplayProduct
                  image={item.image}
                  index={idx}
                  para={`${item.description.slice(0, 140)}${
                    item.description.length > 140 ? '...' : ''
                  }`}
                  subTitle={item.category}
                  title={`${item.name.slice(0, 20)}${
                    item.name.length > 20 ? '...' : ''
                  }`}
                />
              </div>
            );
          })}
        </div>
        <div className='md:hidden px-5'>
          {PRODUCTS.map((item, idx) => {
            return (
              <div key={idx} className='py-4'>
                <DisplayProductSP
                  image={item.image}
                  index={idx}
                  para={`${item.description.slice(0, 100)}${
                    item.description.length > 100 ? '...' : ''
                  }`}
                  subTitle={item.category}
                  title={`${item.name.slice(0, 20)}${
                    item.name.length > 20 ? '...' : ''
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </ListContainer>
  );
};

export default TakeList;
