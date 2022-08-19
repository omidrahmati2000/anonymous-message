import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Message } from '../../messages/entities/message.entity';

@Entity('links')
export class Link {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('text', {
    unique: true,
  })
  link: string;

  @Column('boolean', { default: true })
  isActive?: boolean;

  @ManyToOne((type) => User, (user) => user.links)
  user: User;

  @OneToMany((type) => Message, (message) => message.link)
  messages?: Message[];
}
