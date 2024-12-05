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
          name: "Canapé Moderne",
          description: "Canapé 3 places en tissu gris avec coussins confortables",
          imageUrl_: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
          price: 79999,
        },
        {
          name: "Table à Manger en Chêne",
          description: "Table à manger en bois massif pour 6 personnes",
          imageUrl_: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80",
          price: 59999,
        },
        {
          name: "Fauteuil Scandinave",
          description: "Fauteuil confortable en style nordique avec repose-pieds",
          imageUrl_: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
          price: 29999,
        },
        {
          name: "Lit King Size",
          description: "Lit moderne avec tête de lit capitonnée et rangements",
          imageUrl_: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
          price: 89999,
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