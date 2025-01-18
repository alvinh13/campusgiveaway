import { createClient } from '@/utils/supabase/server';

export default async function Users() {
  const supabase = createClient();
  const { data: users } = await supabase.from('users').select();
  console.log('USERS', users);

  // return <pre>{JSON.stringify(users, null, 2)}</pre>;
  return (
    <div className='flex flex-col items-center justify-center pt-20 font-medium'>
      <div>Users Page</div>
      <div>{`Total Users: ${users?.length}`}</div>
    </div>
  );
}
