import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Observable } from 'rxjs';

import { User } from '@nx-nest/users';

import { UsersService } from './users.service';

@Controller()
export class UsersController {

  constructor(private readonly appService: UsersService) {
  }

  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number): Observable<User> {
    return this.appService.getUser(id);
  }
}
