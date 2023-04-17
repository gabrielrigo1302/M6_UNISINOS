import { Test, TestingModule } from '@nestjs/testing';
import { FolhaDeContaService } from './folha-de-conta.service';

describe('FolhaDeContaService', () => {
  let service: FolhaDeContaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FolhaDeContaService],
    }).compile();

    service = module.get<FolhaDeContaService>(FolhaDeContaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
