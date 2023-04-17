import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FolhaDeContaService } from './folha-de-conta.service';
import { CreateFolhaDeContaDto } from './dto/create-folha-de-conta.dto';
import { UpdateFolhaDeContaDto } from './dto/update-folha-de-conta.dto';

@Controller('folha-de-conta')
export class FolhaDeContaController {
  constructor(private readonly folhaDeContaService: FolhaDeContaService) {}

  @Post()
  create(@Body() createFolhaDeContaDto: CreateFolhaDeContaDto) {
    return this.folhaDeContaService.create(createFolhaDeContaDto);
  }

  @Get()
  findAll() {
    return this.folhaDeContaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.folhaDeContaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFolhaDeContaDto: UpdateFolhaDeContaDto) {
    return this.folhaDeContaService.update(+id, updateFolhaDeContaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.folhaDeContaService.remove(+id);
  }
}
