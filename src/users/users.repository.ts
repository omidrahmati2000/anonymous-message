import {ConflictException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
    }

    async createOrUpdateUser(user: User): Promise<User> {

        try {
            await this.userRepository.save(user);
        } catch (error) {
            if (error.code == 23505) {
                throw new ConflictException("this user already exists");
            }
        }

        return user;
    }

    async findUserById(userId: string): Promise<User> {
        return await this.userRepository.findOneBy({id: userId});
    }

    async findUserByMobile(mobile: string): Promise<User> {
        return await this.userRepository.findOneBy({mobile: mobile});
    }

}