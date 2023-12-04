import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function seedData() {
  for (let i = 0; i < 5000; i++) {
    await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        gender: faker.helpers.arrayElement(['male', 'female'])
      }
    })
  }
}

seedData()
  .catch((error) => {
    console.log(error)
  }).finally(async () => {
    await prisma.$disconnect()
  })