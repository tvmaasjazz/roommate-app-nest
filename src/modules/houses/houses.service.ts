import { Component, Inject } from '@nestjs/common';
import { Model } from 'sequelize-typescript';
import { CreateHouseDto } from './dto/create-house.dto';
import { House } from './house.entity';

@Component()
export class HousesService {
  constructor(
    @Inject('HousesRepository') private readonly housesRepository: typeof Model
  ) {}

  async create(createHouseDto: CreateHouseDto): Promise<House> {
    const house = new House();
    house.name = createHouseDto.name;
    house.key = createHouseDto.key;

    return await house.save();
  }

  async findAll(): Promise<House[]> {
    return await this.housesRepository.findAll<House>();
  }
}