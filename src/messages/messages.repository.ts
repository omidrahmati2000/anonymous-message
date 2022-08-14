import { Message } from "./entities/message.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesRepository extends Repository<Message> {

}