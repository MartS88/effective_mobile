import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const express = require('express');
const expressService = require('./express-service');
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const expressApp = express();

  expressApp.use(expressService);

  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type, Accept',
  });

  const config = new DocumentBuilder()
    .setTitle('Effective Mobile')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('Effective mobile')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(5000, () => console.log(`Server started on ${PORT} port`));
}

bootstrap();
