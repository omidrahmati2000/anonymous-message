import {CreateUserDto} from "../dto/create-user.dto";
import {User} from "../entities/user.entity";
import * as bcrypt from "bcrypt";

export class CreateUserTransformer {
    static async toUserEntity(createUserDto: CreateUserDto) {
        let {first_name, surname, mobile, password} = createUserDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        let user: User = {
            firstName: first_name,
            surname: surname,
            mobile: mobile,
            password: hashedPassword,
        }
        return user;
    }
}