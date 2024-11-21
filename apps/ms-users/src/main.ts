/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { INestMicroservice } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { UserModule } from './app/user/user.module';

async function bootstrap() {
  const app: INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(UserModule, {
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: path.join(__dirname, 'assets/user/user.proto'),
      url: 'localhost:5000'
    }
  });

  await app.listen();
}

bootstrap();
