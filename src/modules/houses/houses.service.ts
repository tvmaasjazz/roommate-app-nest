import { Component } from '@nestjs/common';
import { Model } from 'sequelize-typescript';
import { CreateHouseDto } from './dto/create-house.dto';
import { House } from './house.entity';

@Component()
export class HousesService {
  async create(createHouseDto: CreateHouseDto): Promise<House> {
    const house = new House();
    house.name = createHouseDto.name;
    house.key = createHouseDto.key;

    return await house.save();
  }

  async findHouseById(id: string): Promise<House> {
    return await House.findOne<House>({ where: { id } });
  }
}