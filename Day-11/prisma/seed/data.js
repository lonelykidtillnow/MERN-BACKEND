const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.cart.createMany({
    data: [
      {
        id: 1,
        imageurl: "https://example.com/image1.jpg",
        name: "Product 1",
        price: 500,
        quantity: 2,
        discount: "10%",
        total: 900,
      },
      {
        id: 2,
        imageurl: "https://example.com/image2.jpg",
        name: "Product 2",
        price: 800,
        quantity: 1,
        discount: "0%",
        total: 800,
      },
      {
        id: 3,
        imageurl: "https://example.com/image3.jpg",
        name: "Product 3",
        price: 1200,
        quantity: 3,
        discount: "15%",
        total: 3060,
      },
      {
        id: 4,
        imageurl: "https://example.com/image4.jpg",
        name: "Product 4",
        price: 300,
        quantity: 5,
        discount: "5%",
        total: 1425,
      },
      {
        id: 5,
        imageurl: "https://example.com/image5.jpg",
        name: "Product 5",
        price: 1000,
        quantity: 1,
        discount: "20%",
        total: 800,
      },
      {
        id: 6,
        imageurl: "https://example.com/image6.jpg",
        name: "Product 6",
        price: 250,
        quantity: 4,
        discount: "0%",
        total: 1000,
      },
      {
        id: 7,
        imageurl: "https://example.com/image7.jpg",
        name: "Product 7",
        price: 600,
        quantity: 2,
        discount: "10%",
        total: 1080,
      },
      {
        id: 8,
        imageurl: "https://example.com/image8.jpg",
        name: "Product 8",
        price: 450,
        quantity: 3,
        discount: "5%",
        total: 1282,
      },
      {
        id: 9,
        imageurl: "https://example.com/image9.jpg",
        name: "Product 9",
        price: 700,
        quantity: 1,
        discount: "0%",
        total: 700,
      },
      {
        id: 10,
        imageurl: "https://example.com/image10.jpg",
        name: "Product 10",
        price: 1500,
        quantity: 2,
        discount: "25%",
        total: 2250,
      },
    ]
  });

  console.log("✅ Seeded successfully!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
