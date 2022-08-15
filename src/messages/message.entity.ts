import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('messages')
export class Message {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column("text")
    message: string;
}
