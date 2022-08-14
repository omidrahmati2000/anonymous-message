import { Module } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { MessagesController } from "./messages.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessagesRepository } from "./messages.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([MessagesRepository])
  ],
  controllers: [MessagesController],
  providers: [
    MessagesService
  ]
})
export class MessagesModule {
}
