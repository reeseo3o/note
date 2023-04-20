import { getProducts } from '@/service/products';
import Link from 'next/link';

export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일(DB)에 있는 제품의 리스트 읽어와서, 그것을 보여줌
  const products = await getProducts();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      Products Page
      <div>
        <ul>
          {products.map(({ id, name }, index) => (
            <li key={index}>
              <Link href={`products/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
