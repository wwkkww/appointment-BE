import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { SigninUserDto } from './dtos/signin-user.dto';
export declare class UsersController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    signout(session: any): void;
    createUser(body: CreateUserDto, session: any): Promise<import("./user.entity").User>;
    signin(body: SigninUserDto, session: any): Promise<import("./user.entity").User>;
    findUser(id: string): Promise<import("./user.entity").User>;
    findAllUser(email: string): Promise<import("./user.entity").User[]>;
    removeUser(id: string): Promise<import("./user.entity").User>;
    updateUser(id: string, body: UpdateUserDto): Promise<import("./user.entity").User>;
}
