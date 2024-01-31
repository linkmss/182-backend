import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { Logger } from '@nestjs/common';
import { useSwagger } from './plugins/swagger.plugin';
import { appConfig } from '@config/env';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  useSwagger(app);

  // startup section
  await app.listen(appConfig.port, () => {
    Logger.log(
      `Application listen at ${appConfig.host}:${appConfig.port}`,
      'ApplicationBootstrap',
    );
    Logger.log(
      `Swagger available at ${appConfig.host}:${appConfig.port}/api/swagger`,
      'ApplicationBootstrap',
    );
  });
}

bootstrap().then(null).catch(null);
