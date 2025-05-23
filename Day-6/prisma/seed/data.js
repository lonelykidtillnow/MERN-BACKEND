const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.restaurants.createMany({
    data: [
      {
        restaurant_name: "Spice Garden",
        imageurl: "https://picsum.photos/200/300?1",
        location: "Chennai",
        offer: 15,
      },
      {
        restaurant_name: "Tandoori Treats",
        imageurl: "https://picsum.photos/200/300?2",
        location: "Madurai",
        offer: 20,
      },
      {
        restaurant_name: "Chettinad Palace",
        imageurl: "https://picsum.photos/200/300?3",
        location: "Coimbatore",
        offer: 10,
      },
      {
        restaurant_name: "Curry Corner",
        imageurl: "https://picsum.photos/200/300?4",
        location: "Trichy",
        offer: 25,
      },
      {
        restaurant_name: "Veggie Delight",
        imageurl: "https://picsum.photos/200/300?5",
        location: "Salem",
        offer: 18,
      },
      {
        restaurant_name: "BBQ Nation",
        imageurl: "https://picsum.photos/200/300?6",
        location: "Bangalore",
        offer: 30,
      },
      {
        restaurant_name: "Urban Tadka",
        imageurl: "https://picsum.photos/200/300?7",
        location: "Hyderabad",
        offer: 22,
      },
      {
        restaurant_name: "The Dosa House",
        imageurl: "https://picsum.photos/200/300?8",
        location: "Mumbai",
        offer: 17,
      },
      {
        restaurant_name: "Rice & Spice",
        imageurl: "https://picsum.photos/200/300?9",
        location: "Delhi",
        offer: 12,
      },
      {
        restaurant_name: "Flavors of South",
        imageurl: "https://picsum.photos/200/300?10",
        location: "Pune",
        offer: 14,
      }
    ],
    skipDuplicates: true, // prevents error if data already exists
  });

  console.log("✅ Seeded 10 restaurants.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
