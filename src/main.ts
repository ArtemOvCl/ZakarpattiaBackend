import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupSwagger } from './config/swaggerConfig/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  setupSwagger(app);

  const port = configService.get<number>('PORT');

  await app.listen(port ?? 3000);
}
bootstrap();
