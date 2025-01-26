import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow requests from the front-end
  app.enableCors({
    origin: 'http://localhost:5173', // Make sure this matches your front-end URL
  });

  await app.listen(3000);
}

bootstrap();
