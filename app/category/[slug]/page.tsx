import Link from 'next/link'
import Image from 'next/image'
import { Button } from "components/ui/button"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const products = [
    { id: 1, name: "Canapé KOMFORT", price: 599.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Table ESSEN", price: 299.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Chaise SITZEN", price: 79.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Lampe LICHT", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{params.slug.replace('-', ' ')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">Description courte</p>
            <p className="font-bold mt-2">{product.price} €</p>
            <Link href={`/product/${product.id}`}>
              <Button className="w-full mt-4">Voir le produit</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
