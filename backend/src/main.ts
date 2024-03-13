import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Define your CORS options
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200', // Replace with your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable cookies or other credentials
  };

  // Enable CORS using the defined options
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
