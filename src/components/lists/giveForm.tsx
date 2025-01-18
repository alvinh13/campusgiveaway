import React from 'react';
import { Combobox } from '@/components/molecules/comboBox';
import DonateForm from '@/components/organisms/donateForm';
import SubTitleText from '../atoms/subText';
import ListContainer from '../atoms/listContainer';

const Campuses = [
  {
    value: 'texas',
    name: 'Texas Tech',
    id: 1,
  },
];

const submit = () => {};

const GiveForm = () => {
  return (
    <ListContainer>
      <div className='py-2'>
        <SubTitleText
          text='Your Campus'
          color='gray-700'
          props='text-center py-2 '
        />
        <Combobox options={Campuses} formTitle='campus' initialValue={null} />
      </div>
      <DonateForm />
      {/* <CustomButton name='Submit' type='submit' func={submit} /> */}
    </ListContainer>
  );
};

export default GiveForm;
