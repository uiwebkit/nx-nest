import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { User, UserById, UserList } from '@nx-nest/users';

import { UserService } from './user.service';

@Controller()
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @GrpcMethod('UserService', 'GetUserList')
  getUserList(): UserList {
    return this.userService.getUserList();
  }

  @GrpcMethod('UserService', 'GetUserById')
  getUserById(data: UserById): User {
    return this.userService.getUserById(data);
  }
}
