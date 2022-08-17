import {Module} from "@nestjs/common";
import {MessagesService} from "./messages.service";
import {MessagesController} from "./messages.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MessagesRepository} from "./messages.repository";
import {Message} from "./entities/message.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Message]),
    ],
    controllers: [MessagesController],
    providers: [
        MessagesService,
        MessagesRepository
    ]
})
export class MessagesModule {
}
