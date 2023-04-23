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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../core/file.upload';

@Controller('users')
@ApiTags('User')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async createUser(
    @Req() req: any,
    @Res() res: any,
    @Body() body: CreateUserDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CreateUserDto> {
    if (file) {
      body.avatar = `public/${file.filename}`;
    }
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.createUser(body));
  }

  @Get()
  async getUserList(@Res() res: any): Promise<CreateUserDto[]> {
    return res.status(HttpStatus.OK).json(await this.userService.getUserList());
  }

  @Get('/:userId')
  @ApiParam({ required: true, name: 'userId' })
  async getUserById(
    @Req() req: any,
    @Res() res: any,
    @Param('userId') userId: string,
  ): Promise<CreateUserDto> {
    return res
      .status(HttpStatus.OK)
      .json(await this.userService.getUserById(userId));
  }

  @Patch('/:userId')
  @ApiParam({ required: true, name: 'userId' })
  async updateById(
    @Res() res: any,
    @Req() req: any,
    @Body() body: UpdateUserDto,
    @Param('userId') userId: string,
  ): Promise<CreateUserDto> {
    return res
      .status(HttpStatus.OK)
      .json(await this.userService.updateById(body, userId));
  }

  @Delete('/:userId')
  @ApiParam({ required: true, name: 'userId' })
  async deleteById(
    @Res() res: any,
    @Param('userId') userId: string,
  ): Promise<void> {
    await this.userService.deleteById(userId);
    return res.sendStatus(HttpStatus.NO_CONTENT);
  }
}
