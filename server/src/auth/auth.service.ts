import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';  // Import bcryptjs to compare the passwords
import { JwtService } from '@nestjs/jwt';  // Import JwtService to sign the token
import { PrismaService } from '../prisma/prisma.service';  // Import PrismaService to interact with the database

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService, // Inject PrismaService for DB interaction
    private jwtService: JwtService // Inject JwtService for creating JWTs
  ) {}

  async validateUser(email: string, password: string) {
    // First, check if the user exists by email
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Compare the hashed password with the entered password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return user;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),  // Generate and return JWT token
    };
  }
}
