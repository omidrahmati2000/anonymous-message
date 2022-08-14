import { Injectable } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
import { MessagesRepository } from "./messages.repository";
import { Message } from "./entities/message.entity";

@Injectable()
export class MessagesService {
  constructor(private readonly messageRepository: MessagesRepository) {
  }

  async create(createMessageDto: CreateMessageDto) {
    let { message } = createMessageDto;
    let newMessage: Message = {
      message: message
    };
    await this.messageRepository.insert(newMessage);
    return "This action adds a new message";
  }

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
