import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePetsDto {
  @ApiProperty({ required: true, example: 'Sima' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, example: 'cat' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ required: false, example: 1 })
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty()
  image?: string;

  @ApiProperty({ required: false, example: 'hz' })
  @IsOptional()
  @IsString()
  logo?: string;

  @ApiProperty({ required: true, example: 'sfsd92824b2342jb23hbrmsd' })
  @IsNotEmpty()
  @IsString()
  ownerId: string;
}
