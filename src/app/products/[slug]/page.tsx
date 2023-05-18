import GoProductsButton from '@/components/GoProductsButton';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    // notFound();
    redirect('/products');
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보 찾아 그걸 보여줌
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{product.name} Products Page</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width="300"
        height="300"
      />
      <GoProductsButton />
    </main>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들 미리 만들어 둘 수 있게 해줄 것임(SSG)
  const products = await getProducts();
  // await 하지 않으면 promise 할당됨.
  return products.map((product) => ({ slug: product.id }));
}
