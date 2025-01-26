import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { InvoicesModule } from './invoice/invoice.module';

@Module({
  imports: [AuthModule, InvoicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
