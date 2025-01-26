import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';  // Import the AuthService

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    // Validate the user credentials and generate JWT token
    const user = await this.authService.validateUser(body.email, body.password);  
    return this.authService.login(user);
  }
}
