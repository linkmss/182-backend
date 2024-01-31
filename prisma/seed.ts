import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const USER = {
  nickname: 'linkms',
  password: '123456',
};

async function main() {
  await prisma.user.upsert({
    where: { nickname: USER.nickname },
    update: {},
    create: {
      nickname: USER.nickname,
      password: USER.password,
    },
  });
}

main().finally(() => prisma.$disconnect());
