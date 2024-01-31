import { Module } from '@nestjs/common';
import { PrismaModule } from '@systemModules/prisma';

@Module({
  imports: [PrismaModule],
})
export class MainModule {}
