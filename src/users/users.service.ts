import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { PrismaService } from '../core/orm/prisma.service';

@Injectable()
export class UsersService {
  private users: any = [];
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(userData: CreateUserDto): Promise<any> {
    await this.prismaService.user.create({
      data: {
        age: userData.age,
        status: userData.status,
        name: userData.name,
        city: userData.city,
        email: userData.email,
      },
    });
    this.users.push(userData);
    return this.users;
  }
}
