import Link from "next/link";

export default function ProductsPage() {
  const products = ["shirt", "pants", "skirt", "shoes"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Products Page
      <div>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <Link href={`products/${product}`}>{product}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
