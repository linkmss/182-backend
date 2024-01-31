import { PrismaClient } from '@prisma/client';
import { swaggerAuthConfig } from '@config/env';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { nickname: swaggerAuthConfig.username },
    update: {},
    create: {
      nickname: swaggerAuthConfig.username,
      password: swaggerAuthConfig.password,
    },
  });
}

main().finally(() => prisma.$disconnect());
