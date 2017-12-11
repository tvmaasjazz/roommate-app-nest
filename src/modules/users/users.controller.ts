import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { House } from '../houses/house.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':username')
  findUserByUsername(@Param() params): Observable<User> {
    return this.usersService.findUserByUsername(params.username);
  }

  @Post('addUser')
  create(@Body() createUserDto: CreateUserDto): Observable<User> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id/updateProfile')
  editUser(@Body() createUserDto: CreateUserDto, @Param() params) {
    return this.usersService.editUser(createUserDto, params.id);
  }

  @Put(':id/joinHouse')
  joinHouse(@Body() body, @Param() params): Observable<House> {
    return this.usersService.joinHouse(body.key, params.id);
  }
}
