import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { PrismaService } from '../core/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(userData: CreateUserDto): Promise<CreateUserDto> {
    return await this.prismaService.user.create({
      data: {
        email: userData.email,
        name: userData.name,
        age: userData.age,
        city: userData.city,
        status: userData.status,
        avatar: userData.avatar,
      },
    });
  }

  async getUserList(): Promise<CreateUserDto[]> {
    return await this.prismaService.user.findMany();
  }

  async getUserById(id: string): Promise<CreateUserDto> {
    return this.prismaService.user.findFirst({
      where: { id },
    });
  }

  async updateById(
    dataUpUser: UpdateUserDto,
    id: string,
  ): Promise<CreateUserDto> {
    return await this.prismaService.user.update({
      where: { id },
      data: {
        ...dataUpUser,
      },
    });
  }

  async deleteById(id: string): Promise<void> {
    await this.prismaService.user.delete({ where: { id } });
  }
}
