import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix for every call
  app.setGlobalPrefix('api/v1');

  await app.listen(3000);
}
bootstrap();
