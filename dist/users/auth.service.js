"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const crypto_1 = require("crypto");
const util_1 = require("util");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async signup(email, password, firstName, lastName, phone) {
        const users = await this.usersService.find(email);
        if (users.length) {
            throw new common_1.BadRequestException('Email is already in use');
        }
        const salt = (0, crypto_1.randomBytes)(4).toString('hex');
        const hash = (await scrypt(password, salt, 16));
        const hashedPassword = `${salt}.${hash.toString('hex')}`;
        const user = await this.usersService.create(email, hashedPassword, firstName, lastName, phone);
        return user;
    }
    async signin(email, password) {
        const [user] = await this.usersService.find(email);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const [salt, hashValue] = user.password.split('.');
        const hash = (await scrypt(password, salt, 16));
        if (hashValue !== hash.toString('hex')) {
            throw new common_1.BadRequestException('Authentication error');
        }
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map