import { Controller, Post, Body, Get, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly userService: UsuariosService
  ) {}

  @Post("register")
  create(@Body() registerDto: RegisterDto) {
    return this.authService.create(registerDto);
  }
  @Post("login")
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  @Get("token")
  async getProfile(@Request() req) {
    // El `req.user` debería contener los datos decodificados del token
    const { email } = req.user; // Asumiendo que tu payload tiene el email
    const user = await this.userService.nombre(email);
    
    if (user) {
      return { name: user.nombre }; // Retornamos solo el nombre del usuario
    } else {
      throw new UnauthorizedException('Usuario no encontrado');
    }
  }

}
