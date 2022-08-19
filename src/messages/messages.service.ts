import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';
import { MessagesRepository } from './messages.repository';
import { LinksService } from '../links/links.service';
import { Link } from '../links/entities/link.entity'

@Injectable()
export class MessagesService {
  constructor(
    private readonly messageRepository: MessagesRepository,
    private readonly linkService: LinksService,
  ) {}

  async create(createMessageDto: CreateMessageDto, link: string) {
    let { message } = createMessageDto;
    const currentLink: Link = await this.linkService.findByLink(link);
    let newMessage: Message = {
      message: message,
      link: currentLink
    };
    return this.messageRepository.createOrUpdateMessage(newMessage);
  }

  findAll() {
    return this.messageRepository.getAllMessages();
  }

  findOne(id: string) {
    return this.messageRepository.getMessageById(id);
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    let { message } = updateMessageDto;
    let updateMessage: Message = await this.messageRepository.getMessageById(
      id,
    );
    updateMessage.message = message;
    return this.messageRepository.createOrUpdateMessage(updateMessage);
  }

  remove(id: string) {
    return this.messageRepository.deleteMessageById(id);
  }
}
