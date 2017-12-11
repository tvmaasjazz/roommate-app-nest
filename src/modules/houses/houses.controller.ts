import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { CreateHouseDto } from './dto/create-house.dto';
import { HousesService } from './houses.service';
import { House } from './house.entity';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Post()
  create(@Body() createHouseDto: CreateHouseDto): Observable<House> {
    return this.housesService.create(createHouseDto);
  }

  @Get(':id')
  findHouseById(@Param() params): Observable<House> {
    return this.housesService.findHouseById(params.id);
  }
}