import { Injectable } from '@nestjs/common';
import { CreateFolhaDeContaDto } from './dto/create-folha-de-conta.dto';
import { UpdateFolhaDeContaDto } from './dto/update-folha-de-conta.dto';

@Injectable()
export class FolhaDeContaService {
  create(createFolhaDeContaDto: CreateFolhaDeContaDto) {
    return 'This action adds a new folhaDeConta';
  }

  findAll() {
    return `This action returns all folhaDeConta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} folhaDeConta`;
  }

  update(id: number, updateFolhaDeContaDto: UpdateFolhaDeContaDto) {
    return `This action updates a #${id} folhaDeConta`;
  }

  remove(id: number) {
    return `This action removes a #${id} folhaDeConta`;
  }
}
