import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardarUsuariosModule } from './guardar-usuarios/guardar-usuarios.module';

@Module({
  imports: [UsuariosModule, AuthModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "123456",
      database: "pruebaTecnicoConNest",
      autoLoadEntities: true,
      synchronize: true,
    }),
    GuardarUsuariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
