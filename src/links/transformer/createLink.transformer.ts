import { User } from '../../users/entities/user.entity';
import { Link } from '../entities/link.entity';
import { Helper } from '../../helper';

export class CreateLinkTransformer {
  static toLinkEntity(user: User): Link {
    return {
      link: Helper.randomString(20),
      user,
    };
  }
}
