import { Injectable } from '@nestjs/common';

import { getUserById, getUserList, User, UserById, UserList } from '@nx-nest/users';

@Injectable()
export class UserService {

  getUserList(): UserList {
    return getUserList();
  }

  getUserById(data: UserById): User {
    return getUserById(data);
  }
}
