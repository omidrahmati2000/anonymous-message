import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository} from "typeorm";
import {Message} from "./message.entity";

@Injectable()
export class MessagesRepository {
    constructor(
        @InjectRepository(Message)
        private readonly usersRepository: Repository<Message>,
    ) {
    }

    async createOrUpdateMessage(message: Message): Promise<Message> {

        await this.usersRepository.save(message);

        return message;
    }

    async getAllMessages(): Promise<Message[]> {
        return this.usersRepository.find();
    }

    async getMessageById(id: string): Promise<Message> {
        return await this.usersRepository.findOne({
            where: {
                id: id
            }
        });
    }

    async deleteMessageById(id: string): Promise<object> {
        let result: DeleteResult = await this.usersRepository.delete({id: id});
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