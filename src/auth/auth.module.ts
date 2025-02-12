import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';

@Module({
  imports: [UsuariosModule,
    JwtModule.register({
      global: true,
      secret:jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
 
})
export class AuthModule {}
