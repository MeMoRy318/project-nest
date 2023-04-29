import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  id?: string;

  @ApiProperty({ required: true, example: 'Vasya' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false, example: 18 })
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: false, example: 'Lviv' })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({ required: false, example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @ApiProperty()
  avatar: string;

  @ApiProperty({ required: true, example: 'P@$$word1' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UpdateUserDto {
  @ApiProperty({ required: true, example: 'Vasya' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false, example: 18 })
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ required: false, example: 'Lviv' })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({ required: false, example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @ApiProperty()
  avatar?: string;
}

export class UserLoginDto {
  @ApiProperty({ required: true, example: 'P@$$word1' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;
}
