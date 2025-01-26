import { Module } from '@nestjs/common';
import { InvoicesController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],  
  controllers: [InvoicesController],
  providers: [InvoiceService],
})
export class InvoicesModule {}
