import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { FolhaDeContaModule } from './folha-de-conta/folha-de-conta.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [CategoriaModule, FolhaDeContaModule, RegistroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
