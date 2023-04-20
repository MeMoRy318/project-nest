import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUsersDto {
  @ApiProperty({ required: true, example: 'Vasya' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false, example: 18 })
  @IsOptional()
  @IsNumber()
  age: number;

  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false, example: true })
  @IsBoolean()
  status: boolean;
}

export class UpdateUsersDto {
  @ApiProperty({ required: false, example: 'Vasya' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false, example: 18 })
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
