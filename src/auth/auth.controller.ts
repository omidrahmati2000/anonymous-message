import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {SignInDto} from "./dto/sign-in.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('sign-up')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<string> {
        return this.authService.signUp(createUserDto);
    }

    @Post('sign-in')
    async signIn(@Body() signInDto: SignInDto): Promise<string> {
        return this.authService.signIn(signInDto);
    }
}
