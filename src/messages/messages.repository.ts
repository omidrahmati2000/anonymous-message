import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository} from "typeorm";
import {Message} from "./entities/message.entity";

@Injectable()
export class MessagesRepository {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) {
    }

    async createOrUpdateMessage(message: Message): Promise<Message> {

        await this.messageRepository.save(message);

        return message;
    }

    async getAllMessages(): Promise<Message[]> {
        return this.messageRepository.find();
    }

    async getMessageById(id: string): Promise<Message> {
        return await this.messageRepository.findOne({
            where: {
                id: id
            }
        });
    }

    async deleteMessageById(id: string): Promise<object> {
        let result: DeleteResult = await this.messageRepository.delete({id: id});
        if (result.affected > 0){
            return {
                status: 204,
                message: 'deleted successfully'
            };
        }
       return {
           status: 404,
           message: 'item not found'
       };
    }
}