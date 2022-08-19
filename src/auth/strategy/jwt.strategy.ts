import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interface/jwtPayload.interface';
import { User } from '../../users/entities/user.entity';
import { Inject, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {
    super({
      secretOrKey: 'top secret have been ever generated',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { mobile } = payload;
    const user: User = await this.authService.findUserByMobile(mobile);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
