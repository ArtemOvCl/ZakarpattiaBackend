import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupSwagger } from './config/swaggerConfig/swagger.config';

import { EnvEnum } from './common/enums/EnvEnums';

import { GlobalExceptionsFilter } from './common/filters/GlobalExcepsionsFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  setupSwagger(app);

  app.useGlobalFilters(new GlobalExceptionsFilter());

  const port = configService.get<number>(EnvEnum.PORT);

  await app.listen(port ?? 3000);
}
bootstrap();
