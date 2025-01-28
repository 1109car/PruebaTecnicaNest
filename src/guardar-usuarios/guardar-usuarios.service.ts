import { Injectable } from '@nestjs/common';
import { CreateGuardarUsuarioDto } from './dto/create-guardar-usuario.dto';
import { UpdateGuardarUsuarioDto } from './dto/update-guardar-usuario.dto';
import { GuardarUsuarios } from './entities/guardar-usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GuardarUsuariosService {
  constructor(@InjectRepository(GuardarUsuarios)
              private readonly usuarioGuarRepository: Repository<GuardarUsuarios>) { }

  async create(createUsuarioDto: CreateGuardarUsuarioDto) {
    return await this.usuarioGuarRepository.save(createUsuarioDto);
  }

  async findAll() {
    return await this.usuarioGuarRepository.find();
  }

   async findOne(id: number) {
    return await this.usuarioGuarRepository.findOneBy({id}) ;
  }
  findOneByEmail(correo: string) {
    return  this.usuarioGuarRepository.findOneBy({correo});
  }

  async update(id: number, updateUsuarioDto: UpdateGuardarUsuarioDto) {
    const usuario = await this.usuarioGuarRepository.findOneBy({id});
    if (!usuario) {
      throw new Error(`Usuario with id ${id} not found`);  // Manejo de error si no se encuentra el usuario
    }
    // Asignar nuevos valores al usuario y guardarlo
    const updatedUser = Object.assign(usuario, updateUsuarioDto);
    return await this.usuarioGuarRepository.save(updatedUser);  // Guarda el usuario actualizado
  }

  async remove(id: number) {
    const usuario = await this.usuarioGuarRepository.findOneBy({id});
    if (!usuario) {
      throw new Error(`Usuario with id ${id} not found`);  // Manejo de error si no se encuentra el usuario
    }
    return await this.usuarioGuarRepository.remove(usuario);  // Elimina el usuario
  }
}