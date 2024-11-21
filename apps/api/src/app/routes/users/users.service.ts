import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { IUserService, User, UserList } from '@nx-nest/users';

@Injectable()
export class UsersService implements OnModuleInit {

  private userService: IUserService;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {
  }

  onModuleInit(): void {
    this.userService = this.client.getService<IUserService>('UserService');
  }

  getUserList(): Observable<UserList> {
    return this.userService.getUserList({});
  }

  getUserById(id: number): Observable<User> {
    return this.userService.getUserById({ id });
  }
}
