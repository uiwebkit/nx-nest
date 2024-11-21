/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ValidateInputPipe } from './app/pipes/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
    forceCloseConnections: true,
    // cors: {
    //   origin: ['https://...'],
    //   credentials: true,
    // },
  });

  // Route for api
  const globalPrefix = `api`;
  app.setGlobalPrefix(globalPrefix);

  // DTO validation pipe configuration
  app.useGlobalPipes(new ValidateInputPipe());

  app.enableShutdownHooks();
  process.setMaxListeners(100);

  const port: number = parseInt(process.env.PORT, 10) || 3033;
  await app.listen(port);

  Logger.log(`🚀 Api is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();

const gracefulShutdown = (): void => {
  // db teardown code here
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);