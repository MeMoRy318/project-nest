import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUsersDto, UpdateUsersDto } from './dto/users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Req() req: any,
    @Body() body: CreateUsersDto,
    @Res() res: any,
  ): Promise<CreateUsersDto[]> {
    const users = await this.usersService.createUser(body);
    return res.status(HttpStatus.CREATED).json(users);
  }

  @Patch('/:userId')
  @ApiParam({ name: 'userId', required: true })
  async updateUserById(
    @Req() req: any,
    @Res() res: any,
    @Body() body: UpdateUsersDto,
    @Param('userId') userId: string | number,
  ): Promise<UpdateUsersDto> {
    const user = await this.usersService.updateById(userId, body);
    return res.status(HttpStatus.CREATED).json(user);
  }

  @Delete('/:userId')
  @ApiParam({ name: 'userId', required: true })
  async delete(
    @Res() res: any,
    @Req() req: any,
    @Param('userId') userId: string | number,
  ): Promise<void> {
    await this.usersService.deleteById(userId);
    return res.sendStatus(HttpStatus.OK);
  }

  @Get('/:userId')
  @ApiParam({ name: 'userId', required: true })
  async getUserById(
    @Req() req: any,
    @Res() res: any,
    @Param('userId') userId: number | string,
  ): Promise<CreateUsersDto> {
    return res
      .status(HttpStatus.OK)
      .json(await this.usersService.getUsersById(+userId));
  }

  @Get()
  async getAllUsers(@Res() res: any): Promise<CreateUsersDto[]> {
    const users = await this.usersService.getAllUsers();
    return res.status(HttpStatus.OK).json(users);
  }
}
