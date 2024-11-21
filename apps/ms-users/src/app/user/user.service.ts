import { Injectable } from '@nestjs/common';

import { getUserById, User, UserById } from '@nx-nest/users';

@Injectable()
export class UserService {

  getUserById(data: UserById): User {
    return getUserById(data);
  }
}
