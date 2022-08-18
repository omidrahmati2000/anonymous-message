import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column("text")
  firstName: string;

  @Column("text")
  surname: string;

  @Column({
    type:'text',
    unique:true
  })
  mobile: string;

  @Column('text')
  password: string;

}
