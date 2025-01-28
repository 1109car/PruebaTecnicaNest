import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs'
import { JwtService } from "@nestjs/jwt"
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {


  constructor(
    private readonly userService: UsuariosService,
    private readonly jwtService: JwtService
  ){}
  async create({nombre, correo, password}: RegisterDto) {
    const user = await this.userService.findOneByEmail(correo)
    if (user) throw new BadRequestException('Email already exists');

    await this.userService.create({ nombre, correo, password: await bcryptjs.hash(password, 10)})

    return {
      nombre,
      correo
    };
  }

  async login({correo, password}: LoginDto) {
    const user = await this.userService.findByEmailWithPassword(correo)
    if (!user) throw new UnauthorizedException('Email no existe')

    const isPassworValidd = await bcryptjs.compare(password, user.password)

    if (!isPassworValidd) throw new UnauthorizedException('contraseña no existe')
      
    
    const payload = { correo:user.correo}
    
    const token = await this.jwtService.signAsync(payload)

    return { token, correo}
  }


}
