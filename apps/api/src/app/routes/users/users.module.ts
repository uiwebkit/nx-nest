import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: path.join(__dirname, 'assets/user/user.proto'),
          url: 'localhost:5000'
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService
  ]
})
export class UsersModule {
}
