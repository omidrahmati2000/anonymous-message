import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Link } from '../../links/entities/link.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('text')
  message: string;

  @ManyToOne((type) => Link, (link) => link.messages)
  link: Link;
}
