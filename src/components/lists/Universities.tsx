import React from 'react';
import { createClient } from '@/utils/supabase/server';
// import AddUniversityForm from '../atoms/addUniversityForm';

async function UniversitiesList() {
  const supabase = createClient();
  const { data: universities } = await supabase.from('universities').select();
  // console.log('universities', universities);

  return (
    <div>
      <div>
        <div className='my-4'>University</div>
        {/* <AddUniversityForm /> */}
      </div>
      <div className='py-6'>
        <pre>{JSON.stringify(universities, null, 2)}</pre>
      </div>
    </div>
  );
}

export default UniversitiesList;
