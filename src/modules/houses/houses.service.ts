import { Component } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { CreateHouseDto } from './dto/create-house.dto';
import { House } from './house.entity';

@Component()
export class HousesService {
  create(createHouseDto: CreateHouseDto): Observable<House> {
    const house = new House();
    house.name = createHouseDto.name;
    house.key = createHouseDto.key;

    return Observable.fromPromise(house.save());
  }

  findHouseById(id: string): Observable<House> {
    return Observable.fromPromise(House.findOne<House>({ where: { id } }));
  }
}
