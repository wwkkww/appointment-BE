import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt)

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string, firstName: string, lastName: string, phone: string) {
    // check email available
    const users = await this.usersService.find(email)
    if(users.length) {
      throw new BadRequestException('Email is already in use')
    }

    // generate salt and hashed the password
    // join the hash result and the salt (xxxxxx.yyyyyyyyyy)
    const salt = randomBytes(4).toString('hex')
    const hash = (await scrypt(password, salt, 16)) as Buffer
    const hashedPassword = `${salt}.${hash.toString('hex')}`

    const user = await this.usersService.create(email, hashedPassword, firstName, lastName, phone)
    return user
  }

  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email)
    
    if(!user) {
      throw new NotFoundException('User not found')
    }

    const [salt, hashValue] = user.password.split('.')
    const hash = (await scrypt(password, salt, 16)) as Buffer
    if (hashValue !== hash.toString('hex')) {
      throw new BadRequestException('Authentication error')
    }
    
    return user
  }
}