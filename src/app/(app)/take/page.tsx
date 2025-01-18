import PageContainer from '@/components/atoms/pageContainer';
import TakeList from '@/components/lists/takeList';
import { getProducts } from '@/repositories/productRepository';

export default async function TakePage() {
  const items = await getProducts();
  return (
    <PageContainer>
      <TakeList Products={items} />
    </PageContainer>
  );
}
