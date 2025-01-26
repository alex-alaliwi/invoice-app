import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';  // Import bcrypt for password hashing

const prisma = new PrismaClient();

async function main() {
  // Hash the password before saving
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create a user with the hashed password
  await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {
      password: hashedPassword,  // Update the password with the hashed value
    },
    create: {
      email: 'test@test.com',
      password: hashedPassword,
      name: 'Test User',
    },
  });

  console.log('User created with hashed password');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
