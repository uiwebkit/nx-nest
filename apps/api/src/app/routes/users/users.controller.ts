import { Controller, Get, Header, Param, ParseIntPipe } from '@nestjs/common';
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
  @Header('Cache-Control', 'max-age=3600')
  getUserById(@Param('id', ParseIntPipe) id: number): Observable<User> {
    return this.appService.getUserById(id);
  }
}
