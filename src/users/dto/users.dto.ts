import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true, example: 'Vasya' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: false, example: 18 })
  @IsOptional()
  @IsNumber()
  age: number;

  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ required: false, example: 'Lviv' })
  @IsOptional()
  @IsString()
  city: string;

  @ApiProperty({ required: false, example: true })
  @IsOptional()
  @IsBoolean()
  status: boolean;
}
