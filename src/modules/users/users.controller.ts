import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':username')
  async findUserByUsername(@Param() params) {
    return await this.usersService.findUserByUsername(params.username);
  }

  @Post('addUser')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Put(':id/updateProfile')
  async editUser(@Body() createUserDto: CreateUserDto, @Param() params) {
    return await this.usersService.editUser(createUserDto, params.id);
  }

  @Put(':id/joinHouse')
  async joinHouse(@Body() body, @Param() params) {
    return await this.usersService.joinHouse(body.key, params.id);
  }
}