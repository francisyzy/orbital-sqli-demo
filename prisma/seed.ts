import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    // Create user with role USER
    await prisma.user.create({
      data: {
        telegramId: 1,
        phone_number: "123",
        email: "alex@example.com",
        name: "Alex",
      },
    });
    // Create user with role USER
    await prisma.user.create({
      data: {
        telegramId: 4,
        phone_number: "234",
        email: "bob@example.com",
        name: "Bob",
      },
    });

    // Create user with role ADMIN
    await prisma.user.create({
      data: {
        telegramId: 2,
        phone_number: "345",
        email: "jane@example.com",
        name: "Jane",
        role: "ADMIN",
      },
    });

    // Create user with role ADMIN
    await prisma.user.create({
      data: {
        telegramId: 3,
        phone_number: "456",
        email: "john@example.com",
        name: "John",
        role: "ADMIN",
      },
    });

    console.log("Seeding completed successfully");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
