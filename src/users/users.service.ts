import { Injectable } from '@nestjs/common';
import { CreateUsersDto, UpdateUsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  private users: CreateUsersDto[] = [];

  async createUser(data: CreateUsersDto): Promise<CreateUsersDto[]> {
    this.users.push(data);
    return this.users;
  }

  async getUsersById(id: number | string): Promise<CreateUsersDto> {
    return await this.users[id];
  }

  async updateById(
    id: string | number,
    data: UpdateUsersDto,
  ): Promise<CreateUsersDto> {
    const user = { ...this.users[+id], data };
    this.users[+id] = user;
    return user;
  }

  async deleteById(id: string | number): Promise<void> {
    this.users.splice(+id, 1);
  }

  async getAllUsers(): Promise<CreateUsersDto[]> {
    return this.users;
  }
}
