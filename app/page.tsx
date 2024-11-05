import Link from 'next/link'
import Image from 'next/image'
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Search, ShoppingCart, User } from 'lucide-react'

export default function Home() {
  const categories = ['Salon', 'Chambre', 'Cuisine', 'Bureau']
  const featuredProducts = [
    { id: 1, name: "Canapé KOMFORT", price: 599.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Table ESSEN", price: 299.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Chaise SITZEN", price: 79.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Lampe LICHT", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">MÖBEL</Link>
          <div className="flex items-center space-x-4">
            <form className="flex">
              <Input type="search" placeholder="Rechercher..." className="rounded-r-none" />
              <Button type="submit" variant="secondary" className="rounded-l-none">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <Button variant="ghost"><User className="h-5 w-5" /></Button>
            <Button variant="ghost"><ShoppingCart className="h-5 w-5" /></Button>
          </div>
        </div>
      </header>

      <nav className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <ul className="flex space-x-6">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/category/${category.toLowerCase()}`} className="hover:underline">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Bienvenue chez MÖBEL</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Catégories populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category} className="bg-gray-200 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold">{category}</h3>
                <Link href={`/category/${category.toLowerCase()}`}>
                  <Button variant="link">Voir plus</Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Produits en vedette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
                <Button className="w-full mt-4">Ajouter au panier</Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos de MÖBEL</h3>
            <p>Votre destination pour des meubles de qualité et un design scandinave.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Conditions générales</Link></li>
              <li><Link href="#" className="hover:underline">Politique de confidentialité</Link></li>
              <li><Link href="#" className="hover:underline">Nous contacter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
