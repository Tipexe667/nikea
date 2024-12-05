import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/ProductCard";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();

interface HomeProps {
  searchParams: { page: string };
}

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  try {
    const currentPage = parseInt(page);
    const pageSize = 6;
    const heroItemCount = 1;

    console.log("Tentative de connexion à la base de données...");

    const totalItemCount = await prisma.products.count();
    console.log("Nombre total de produits:", totalItemCount);
    
    const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

    const products = await prisma.products.findMany({
      orderBy: { id: "desc" },
      take: pageSize + heroItemCount,
    });

    console.log("Produits récupérés:", products.length);

    if (!products || products.length === 0) {
      return <div>Aucun produit trouvé dans la base de données.</div>;
    }

    return (
      <div className="flex flex-col items-center py-8 px-4">
        {currentPage === 1 && (
          <div className="hero rounded-xl bg-gray-100 dark:bg-blue-950/80 p-6 shadow-lg mb-8">
            <div className="hero-content flex-col lg:flex-row space-y-4 lg:space-y-0">
              <Image
                src={products[0].imageUrl_}
                alt={products[0].name}
                width={400}
                height={800}
                className="w-full max-w-sm rounded-lg shadow-xl"
                priority
              />
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{products[0].name}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">{products[0].description}</p>
                <Link href={"/products/" + products[0].id} passHref>
                  <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
                    Check it out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          {(currentPage === 1 ? products.slice(1) : products).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8">
            <PaginationBar currentPage={currentPage} totalPages={totalPages} />
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Erreur détaillée:", error);
    return (
      <div className="text-red-500 p-4">
        Erreur lors du chargement des produits: {error instanceof Error ? error.message : "Erreur inconnue"}
      </div>
    );
  } finally {
    await prisma.$disconnect();
  }
}
