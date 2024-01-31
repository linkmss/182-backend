import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

export const useSwagger = (app: INestApplication) => {
  app.use(
    ['/api/swagger'],
    basicAuth({
      challenge: true,
      users: {
        linkms: '123456',
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Documentation')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/swagger', app, document);
};
