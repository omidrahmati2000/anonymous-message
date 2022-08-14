import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MessagesModule } from "./messages/messages.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'anonymous-message',
    }),
    MessagesModule
  ]
})
export class AppModule {
}
