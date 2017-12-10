import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateHouseDto } from './dto/create-house.dto';
import { HousesService } from './houses.service';
import { House } from './house.entity';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Post()
  async create(@Body() createHouseDto: CreateHouseDto) {
    await this.housesService.create(createHouseDto);
  }

  @Get(':id')
  async findHouseById(@Param() params): Promise<House> {
    return await this.housesService.findHouseById(params.id);
  }
}