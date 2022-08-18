import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { CreatePayloadTransformer } from './transformer/createPayload.transformer';
import { SignInDto } from './dto/sign-in.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interface/jwtPayload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<string> {
    let user: User = await this.userService.create(createUserDto);

    const payload: JwtPayload =
      CreatePayloadTransformer.createUserPayload(user);

    return this.jwtService.sign(payload);
  }

  async signIn(signInDto: SignInDto): Promise<string> {
    const { mobile, password } = signInDto;
    const user: User = await this.userService.findUserByMobile(mobile);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new NotFoundException('This user not exist');
    }

    const payload: JwtPayload =
      CreatePayloadTransformer.createUserPayload(user);

    return this.jwtService.sign(payload);
  }
}
