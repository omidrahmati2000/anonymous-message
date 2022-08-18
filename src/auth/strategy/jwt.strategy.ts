import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interface/jwtPayload.interface';
import { User } from '../../users/entities/user.entity';
import { UsersService } from '../../users/users.service';
import { UnauthorizedException } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      secretOrKey: 'top secret have been ever generated',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { mobile } = payload;
    const user: User = await this.userService.findUserByMobile(mobile);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
