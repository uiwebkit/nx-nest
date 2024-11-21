import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

import { User, UserById } from '@nx-nest/users';

import { UserService } from './user.service';

@Controller()
export class UserController {

  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'GetUserById')
  getUserById(data: UserById, metadata: Metadata, call: ServerUnaryCall<any, any>): User {
    return this.userService.getUserById(data);
  }
}
