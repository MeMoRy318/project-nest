import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}

  @Get()
  async getAllUsers(): Promise<[]> {
    return [];
  }

  @Get('/:userId')
  async getUserById(): Promise<[]> {
    return [];
  }

  @Post()
  async createUser(
    @Req() req: any,
    @Body() body: CreateUserDto,
    @Res() res: any,
  ): Promise<any> {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userServices.createUser(body));
  }

  @Put('/:userId')
  async updateUser(): Promise<[]> {
    return [];
  }

  @Delete('/:userId')
  async deleteUser(): Promise<[]> {
    return [];
  }
}
