const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  log: ['query'],
})

async function main() {
  try {
    console.log('Début du seed...')
    
    await prisma.products.deleteMany({})

    console.log('Création des nouveaux produits...')
    const products = await prisma.products.createMany({
      data: [
        {
          name: "Lit King Size",
          description: "Lit moderne avec tête de lit capitonnée et rangements",
          imageUrl_: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
          price: 89999,
        },
        {
          name: "Bureau Design",
          description: "Bureau moderne avec rangements intégrés et support écran",
          imageUrl_: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
          price: 45999,
        },
        {
          name: "Bibliothèque Industrielle",
          description: "Étagère style industriel en métal et bois, 5 niveaux",
          imageUrl_: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80",
          price: 34999,
        },
        {
          name: "Lampadaire Articulé",
          description: "Lampadaire moderne ajustable en hauteur, finition laiton",
          imageUrl_: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
          price: 19999,
        },
        {
          name: "Table Basse Minimaliste",
          description: "Table basse en verre et métal, design épuré",
          imageUrl_: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
          price: 24999,
        },

        {
          name: "Commode Contemporaine",
          description: "Commode 6 tiroirs en bois laqué blanc avec poignées design",
          imageUrl_: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
          price: 54999,
        },
        {
          name: "Miroir Mural Design",
          description: "Grand miroir mural avec cadre en métal doré",
          imageUrl_: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
          price: 29999,
        },

      ],
    })

    console.log(`${products.count} produits ont été créés`)
    console.log('Seed terminé avec succès!')
  } catch (error) {
    console.error('Erreur pendant le seed:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  }) 