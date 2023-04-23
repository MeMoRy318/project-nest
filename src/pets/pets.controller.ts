import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PetsService } from './pets.service';

@Controller('pets')
@ApiTags('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}
}
