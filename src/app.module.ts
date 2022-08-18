import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {MessagesModule} from "./messages/messages.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Message} from "./messages/entities/message.entity";
import { UsersModule } from './users/users.module';
import {User} from "./users/entities/user.entity";
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: 'root',
            database: 'anonymous-message',
            synchronize: true,
            entities: [Message, User]
        }),
        MessagesModule,
        UsersModule,
        AuthModule
    ]
})
export class AppModule {
}
