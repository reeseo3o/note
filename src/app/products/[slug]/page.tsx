import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export default function PantsPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{params.slug}Products Page</div>
    </main>
  );
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({ slug: product }));
}
