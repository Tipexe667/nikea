import { Button } from "components/ui/button"
import { Star, Truck } from 'lucide-react'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = {
    id: params.id,
    name: "Canapé KOMFORT",
    price: 599.99,
    description: "Un canapé confortable et élégant, parfait pour votre salon. Fabriqué avec des matériaux de haute qualité pour une durabilité maximale.",
    image: "/placeholder.svg?height=400&width=600"
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-300 h-96 mb-4 rounded"></div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-200 h-24 rounded"></div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">(123 avis)</span>
          </div>
          <p className="text-2xl font-bold mb-4">{product.price} €</p>
          <p className="mb-6">{product.description}</p>
          <Button size="lg" className="w-full mb-4">Ajouter au panier</Button>
          <div className="flex items-center text-green-600 mb-4">
            <Truck className="h-5 w-5 mr-2" />
            <span>En stock - Livraison sous 3-5 jours ouvrés</span>
          </div>
          <div className="border-t pt-4">
            <h2 className="font-semibold mb-2">Caractéristiques du produit</h2>
            <ul className="list-disc list-inside">
              <li>Matériau: Tissu polyester</li>
              <li>Dimensions: L200 x P90 x H85 cm</li>
              <li>Couleur: Gris clair</li>
              <li>Garantie: 5 ans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
