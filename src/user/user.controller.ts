import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.userService.createUser(
      user.name,
      user.email,
      user.password,
    );
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return await this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: User): Promise<User> {
    return await this.userService.updateUser(
      id,
      user.name,
      user.email,
      user.password,
    );
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
