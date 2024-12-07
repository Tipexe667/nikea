import prisma from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import { cache } from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "./AddToCartButton";
import { Metadata } from "next";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.products.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + " - Nikea",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl_ }],
    },
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <div className="flex flex-col min-h-[calc(100vh-300px)]">
      <div className="flex-grow container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-start">
          <div className="lg:w-1/2">
            <Image
              src={product.imageUrl_}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg w-full object-cover max-h-[400px]"
              priority
            />
          </div>

          <div className="lg:w-1/2 space-y-2">
            <h1 className="text-3xl font-bold text-black dark:text-white">{product.name}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">{formatPrice(product.price)}</p>
            <p className="text-lg text-black dark:text-white">{product.description}</p>
            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
