import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { CreateUserTransformer } from './transformer/createUser.transformer';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = await CreateUserTransformer.toUserEntity(createUserDto);
    return this.userRepository.createOrUpdateUser(user);
  }

  async findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string): Promise<User> {
    const user: User = await this.userRepository.findUserById(id);

    if (!user) {
      throw new NotFoundException('This user not exist');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByMobile(mobile: string): Promise<User> {
    const user: User = await this.userRepository.findUserByMobile(mobile);

    if (!user) {
      throw new NotFoundException('This user not exist');
    }

    return user;
  }
}
