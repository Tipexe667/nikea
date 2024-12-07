import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";
import { Metadata } from "next";

interface SearchPageProps {
  searchParams: { query: string };
}

export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Recherche: ${query || ""} - Nikea`,
  };
}

export default async function SearchPage({
  searchParams: { query },
}: SearchPageProps) {
  if (!query) {
    return (
      <div className="mx-auto max-w-7xl p-4">
        <p className="mb-4 text-black dark:text-white">
          Veuillez entrer un terme de recherche
        </p>
      </div>
    );
  }

  try {
    console.log("Tentative de recherche avec query:", query);
    const products = await prisma.products.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: { id: "desc" },
    });
    console.log("Résultats trouvés:", products);

    return (
      <div className="mx-auto max-w-7xl p-4">
        <p className="mb-4 text-black dark:text-white">
          {products.length === 0
            ? "Aucun produit trouvé"
            : `${products.length} produit(s) trouvé(s) pour "${query}"`}
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Détails de l'erreur:", error);
    return (
      <div className="mx-auto max-w-7xl p-4">
        <p className="mb-4 text-black dark:text-white">
          Une erreur est survenue lors de la recherche. 
          {process.env.NODE_ENV === "development" && error instanceof Error && 
            ` (${error.message})`
          }
        </p>
      </div>
    );
  }
}
