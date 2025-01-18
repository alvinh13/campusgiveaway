import { createClient } from '@/utils/supabase/server';

async function getProducts() {
  const supabase = createClient();
  const { data: items, error } = await supabase.from('items').select();
  if (error) {
    console.log('error', error);
    return [];
  }
  return items;
}

export { getProducts };

