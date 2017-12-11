import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersSetvice) {}

  @Get(':username')
  async findUserByUsername(@Param() params) {
    return await usersService.findUserByUsername(params.username);
  }

  @Post('addUser')
  async create(@Body() createUserDto: CreateUserDto) {
    return await usersService.create(createUserDto);
  }

  @Put(':id/updateProfile')
  async editUser(@Body() createUserDto: CreateUserDto, @Param() params) {
    return await usersService.editUser(createUserDto, params.id);
  }

  @Put(':id/joinHouse')
  async joinHouse(@Param() params) {
    return await usersService.joinHouse(params.id);
  }
}