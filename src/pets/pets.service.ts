import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma.service';
import { UsersService } from '../users/users.service';
import { CreatePetsDto } from './dto/pets.dto';

@Injectable()
export class PetsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async createAnimal(
    data: CreatePetsDto,
    userId: string,
  ): Promise<CreatePetsDto> {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new HttpException('user this id not found', HttpStatus.NOT_FOUND);
    }
    return await this.prismaService.pet.create({
      data: {
        ownerId: userId,
        name: data.name,
        age: data.age,
        type: data.type,
        logo: data.logo,
        image: data.image,
      },
    });
  }
}
