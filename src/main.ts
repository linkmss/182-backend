import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { Logger } from '@nestjs/common';
import { useSwagger } from './plugins/swagger.plugin';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  useSwagger(app);

  // startup section
  const PORT = 3712;
  const HOST = '0.0.0.0';
  await app.listen(PORT, () => {
    Logger.log(`Application listen at ${HOST}:${PORT}`, 'ApplicationBootstrap');
    Logger.log(
      `Swagger available at ${HOST}:${PORT}/api/swagger`,
      'ApplicationBootstrap',
    );
  });
}

bootstrap().then(null).catch(null);
