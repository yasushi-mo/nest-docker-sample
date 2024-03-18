import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const createdUser = new User();
    createdUser.name = name;
    createdUser.email = email;
    createdUser.password = password;
    return await this.userRepository.save(createdUser);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async updateUser(
    id: number,
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const updatedUser = await this.getUserById(id);

    if (!updatedUser) {
      throw new Error('User not found');
    }

    updatedUser.name = name;
    updatedUser.email = email;
    updatedUser.password = password;

    return await this.userRepository.save(updatedUser);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
