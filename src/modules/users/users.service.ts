import { Component } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { House } from '../houses/house.entity';

@Component()
export class UsersService {
  create(createUserDto: CreateUserDto): Observable<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.phone = createUserDto.phone;
    user.imageUrl = createUserDto.imageUrl;

    return Observable.fromPromise(user.save());
  }

  findUserByUsername(username: string): Observable<User> {
    return Observable.fromPromise(
      User.findOne<User>({ where: { username } })
    );
  }

  editUser(createUserDto: CreateUserDto, id: string) {
    return Observable.fromPromise(
      User.update<User>(createUserDto, { where: { id } })
    );
  }

  // would want to inject houseService and have func that finds by key?
  joinHouse(key: string, id: string): Observable<House> {
    const houseStream = Observable.fromPromise(
      House.findOne<House>({ where: { key } })
    );

    houseStream.subscribe((house) => {
      User.update({ houseId: house.id }, { where: { id } });
    });
    
    return houseStream;
  }
}