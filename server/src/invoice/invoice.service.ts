import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {} 

  async findAll() {
    // Using Prisma to fetch the invoices from the database
    return await this.prisma.invoice.findMany({
      include: {
        user: true, 
      },
    });
  }

  // add methods to create, update, delete invoices, etc., using Prisma's ORM
}
