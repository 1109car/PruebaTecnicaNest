import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario)
              private readonly usuarioRepository: Repository<Usuario>) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioRepository.save(createUsuarioDto);
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }

   async findOne(id: number) {
    return await this.usuarioRepository.findOneBy({id}) ;
  }
  findOneByEmail(correo: string) {
    return  this.usuarioRepository.findOneBy({correo});
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepository.findOneBy({id});
    if (!usuario) {
      throw new Error(`Usuario with id ${id} not found`);  // Manejo de error si no se encuentra el usuario
    }
    // Asignar nuevos valores al usuario y guardarlo
    const updatedUser = Object.assign(usuario, updateUsuarioDto);
    return await this.usuarioRepository.save(updatedUser);  // Guarda el usuario actualizado
  }
  async findByEmailWithPassword(correo: string){
    return this.usuarioRepository.findOne({
     where: { correo },
     select: ['id', 'nombre', 'correo', 'password']
    })
 }
 async nombre(correo: string){
  return this.usuarioRepository.findOne({
   where: { correo },
   select: ['nombre']
  })
}

  async remove(id: number) {
    const usuario = await this.usuarioRepository.findOneBy({id});
    if (!usuario) {
      throw new Error(`Usuario with id ${id} not found`);  // Manejo de error si no se encuentra el usuario
    }
    return await this.usuarioRepository.remove(usuario);  // Elimina el usuario
  }
}
