import { Test, TestingModule } from '@nestjs/testing';
import { InvoicesController } from './invoice.controller'; // Ensure this imports the correct controller class

describe('InvoicesController', () => {
  let controller: InvoicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoicesController], // Ensure this uses the correct controller class
    }).compile();

    controller = module.get<InvoicesController>(InvoicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
