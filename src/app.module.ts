import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { PrismaService } from './core/prisma.service';
import { PetsController } from './pets/pets.controller';
import { PetsModule } from './pets/pets.module';
import { PetsService } from './pets/pets.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, PetsModule, AuthModule],
  controllers: [AppController, UsersController, PetsController],
  providers: [AppService, UsersService, PrismaService, PetsService],
})
export class AppModule {}
