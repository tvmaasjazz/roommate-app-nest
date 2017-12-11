import { Component } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { House } from '../houses/house.entity';

@Component()
export class UsersService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.phone = createUserDto.phone;
    user.imageUrl = createUserDto.imageUrl;

    return await user.save();
  }

  async findUserByUsername(username: string): Promise<User> {
    return await User.findOne<User>({ where: { username } });
  }

  async editUser(createUserDto: CreateUserDto, id: string) {
    return await User.update<User>(createUserDto, { where: { id } });
  }

  // would want to inject houseService and have func that finds by key?
  async joinHouse(key: string, id: string): Promise<House> {
    const house = await House.findOne<House>({ where: { key } });
    await User.update({ houseId: house.id }, { where: { id } });
    return house;
  }
}