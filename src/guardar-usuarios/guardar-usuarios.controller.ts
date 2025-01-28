import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GuardarUsuariosService } from './guardar-usuarios.service';
import { CreateGuardarUsuarioDto } from './dto/create-guardar-usuario.dto';
import { UpdateGuardarUsuarioDto } from './dto/update-guardar-usuario.dto';

@Controller('guardarusuarios')
export class GuardarUsuariosController {
  constructor(private readonly guardarUsuariosService: GuardarUsuariosService) {}

  @Post()
  create(@Body() createGuardarUsuarioDto: CreateGuardarUsuarioDto) {
    return this.guardarUsuariosService.create(createGuardarUsuarioDto);
  }

  @Get()
  findAll() {
    return this.guardarUsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guardarUsuariosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGuardarUsuarioDto: UpdateGuardarUsuarioDto) {
    return this.guardarUsuariosService.update(+id, updateGuardarUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardarUsuariosService.remove(+id);
  }
}
