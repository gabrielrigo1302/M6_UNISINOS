import { Module } from '@nestjs/common';
import { FolhaDeContaService } from './folha-de-conta.service';
import { FolhaDeContaController } from './folha-de-conta.controller';

@Module({
  controllers: [FolhaDeContaController],
  providers: [FolhaDeContaService]
})
export class FolhaDeContaModule {}
