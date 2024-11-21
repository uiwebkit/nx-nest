import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Observable } from 'rxjs';

import { User, UserList } from '@nx-nest/users';

import { UsersService } from './users.service';

@Controller()
export class UsersController {

  constructor(private readonly appService: UsersService) {
  }

  @Get()
  getUserList(): Observable<UserList> {
    return this.appService.getUserList();
  }

  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number): Observable<User> {
    return this.appService.getUserById(id);
  }
}
