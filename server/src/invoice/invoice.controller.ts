import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Import the guard
import { InvoiceService } from './invoice.service';  // Use InvoiceService (singular)

@Controller('invoices')
export class InvoicesController {  // Make sure this is the correct class name
  constructor(private readonly invoiceService: InvoiceService) {}  // Use InvoiceService (singular)

  @UseGuards(JwtAuthGuard) // Ensure the user is authenticated
  @Get()
  async getInvoices() {
    return this.invoiceService.findAll(); // Call the service method
  }
}
