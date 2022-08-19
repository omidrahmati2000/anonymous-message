import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Link } from '../../links/entities/link.entity';
import { Exclude } from 'class-transformer'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('text')
  firstName: string;

  @Column('text')
  surname: string;

  @Column({
    type: 'text',
    unique: true,
  })
  mobile: string;

  @Column('text')
  @Exclude({ toPlainOnly: true })
  password: string;

  @OneToMany((type) => Link, (link) => link.user)
  links?: Link[];
}
