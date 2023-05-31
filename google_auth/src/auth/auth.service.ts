import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';
//eslint-disable-next-line
const users = require('../users.json');
// import users from '../users.json';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  signinLocal(dto: AuthDto) {
    const user = users.find((_user) => _user.email === dto.email);
    if (!user) throw new UnauthorizedException('User no existe');
    if (dto.password !== user.password)
      throw new UnauthorizedException('INvalid PASS');
    return this.signUser(user.id, user.email, 'user');
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      type: type,
    });
  }
}
