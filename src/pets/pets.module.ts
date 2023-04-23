import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../core/prisma.service';

@Module({
  providers: [PetsService, UsersService, PrismaService],
})
export class PetsModule {}
