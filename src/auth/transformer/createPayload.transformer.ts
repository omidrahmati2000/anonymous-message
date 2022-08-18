import { User } from '../../users/entities/user.entity';
import { JwtPayload } from '../interface/jwtPayload.interface';

export class CreatePayloadTransformer {
  static createUserPayload(user: User): JwtPayload {
    return {
      name: user.firstName + ' ' + user.surname,
      mobile: user.mobile,
    };
  }
}
