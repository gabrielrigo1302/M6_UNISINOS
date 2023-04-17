import { Test, TestingModule } from '@nestjs/testing';
import { FolhaDeContaController } from './folha-de-conta.controller';
import { FolhaDeContaService } from './folha-de-conta.service';

describe('FolhaDeContaController', () => {
  let controller: FolhaDeContaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FolhaDeContaController],
      providers: [FolhaDeContaService],
    }).compile();

    controller = module.get<FolhaDeContaController>(FolhaDeContaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
