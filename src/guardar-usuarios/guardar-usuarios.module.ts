import { Module } from '@nestjs/common';
import { GuardarUsuariosService } from './guardar-usuarios.service';
import { GuardarUsuariosController } from './guardar-usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardarUsuarios } from './entities/guardar-usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GuardarUsuarios])],
  exports: [GuardarUsuariosService], 
  controllers: [GuardarUsuariosController],
  providers: [GuardarUsuariosService],
})
export class GuardarUsuariosModule {}
