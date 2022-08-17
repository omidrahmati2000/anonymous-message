import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("string")
  firstname: string;

  @Column("string")
  surname: string;

  @Column({
    type:'string',
    unique:true
  })
  mobile: string;

  @Column('string')
  password: string;

}
