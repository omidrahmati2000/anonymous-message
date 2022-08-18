import {IsMobilePhone, IsString} from "class-validator";

export class SignInDto {
    @IsString()
    @IsMobilePhone('fa-IR')
    mobile: string;

    @IsString()
    password: string;
}
