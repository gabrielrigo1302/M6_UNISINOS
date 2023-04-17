import { PartialType } from '@nestjs/mapped-types';
import { CreateFolhaDeContaDto } from './create-folha-de-conta.dto';

export class UpdateFolhaDeContaDto extends PartialType(CreateFolhaDeContaDto) {}
