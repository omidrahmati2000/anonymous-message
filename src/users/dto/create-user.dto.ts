import {IsMobilePhone, IsString, MinLength} from "class-validator";

export class CreateUserDto {
    @IsString()
    first_name: string;

    @IsString()
    surname: string;

    @IsString()
    @IsMobilePhone('fa-IR')
    mobile: string;

    @IsString()
    @MinLength(6)
    password: string;
}
