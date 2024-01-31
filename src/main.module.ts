import { Module } from '@nestjs/common';
import { PrismaModule } from '@systemModules/prisma';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
})
export class MainModule {}
