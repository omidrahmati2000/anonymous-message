import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import {AuthGuard} from "@nestjs/passport";

@Controller('messages')
@UseGuards(AuthGuard())
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post(':link')
  create(@Body() createMessageDto: CreateMessageDto, @Param('link') link: string) {
    return this.messagesService.create(createMessageDto, link);
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messagesService.update(id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(id);
  }
}
