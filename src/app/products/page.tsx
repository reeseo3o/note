import { getProducts } from '@/service/products';
import Link from 'next/link';
import Image from 'next/image';
import MeowArticle from '@/components/MeowArticle';
import clothesImage from '/public/images/clothes.jpeg';
// export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일(DB)에 있는 제품의 리스트 읽어와서, 그것을 보여줌
  const products = await getProducts();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      Products Page
      <div>
        <h3>version 3</h3>
        <Image src={clothesImage} alt="Clothes" />
        <ul>
          {products.map(({ id, name }, index) => (
            <li key={index}>
              <Link href={`products/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
        <MeowArticle />
      </div>
    </main>
  );
}
