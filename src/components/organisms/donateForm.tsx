import React from 'react';
import BasicCard from '../atoms/basicCard';
import { InputField } from '../atoms/input';
import SubTitleText from '../atoms/subText';
import { Combobox } from '../molecules/comboBox';
import { CATEGORIES } from '@/constants/commonConstants';
import ParaText from '../atoms/paraText';
import CustomButton from '../atoms/button';

const DonateForm = () => {
  const submit = () => {};

  const submitButton = {
    name: 'Place your donation',
    type: 'submit',
    func: submit,
  };

  const handleFormSubmit = (formData: any) => {
    // Handle form submission with formData
    console.log(formData);
  };

  return (
    <BasicCard>
      <div className='text-center'>
        <SubTitleText text={`Your donation detail`} />
      </div>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4  pt-4 j place-content-stretch '>
        <InputField
          type='text'
          placeholder='Item Title *'
          onValueChange={(value) => console.log(value)}
        />
        <div className='place-self-end'>
          <Combobox options={CATEGORIES} formTitle='category *' />
        </div>
        <div className='col-span-2'>
          <InputField
            type='text'
            placeholder='description'
            onValueChange={(value) => console.log(value)}
          />
        </div>
        <div className='col-span-2'>
          <InputField
            type='text'
            placeholder='note or special instructions'
            onValueChange={(value) => console.log(value)}
          />
        </div>
        <div className='pt-3 col-span-2'>
          <ParaText text='Contact Information' />
        </div>
        <InputField
          type='text'
          placeholder='Your name *'
          onValueChange={(value) => console.log(value)}
        />
        <InputField
          type='text'
          placeholder='Phone number *'
          onValueChange={(value) => console.log(value)}
        />
        <div className='col-span-2'>
          <InputField
            type='email'
            placeholder='email *'
            onValueChange={(value) => console.log(value)}
          />
        </div>
        <div className='col-span-2'>
          <InputField
            type='file'
            placeholder='choose images *'
            height='h-16'
            multiple={true}
            onValueChange={(value) => console.log(value)}
          />
        </div>
        <div className='place-self-center col-span-2 pt-2'>
          <CustomButton btn={submitButton} />
        </div>
      </div>
    </BasicCard>
  );
};

export default DonateForm;
