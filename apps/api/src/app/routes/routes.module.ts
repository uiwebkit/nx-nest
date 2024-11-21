import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';

import { UsersModule } from './users/users.module';

const apiRoutes: Routes = [
  {
    path: 'users',
    module: UsersModule
  }
];

@Module({
  imports: [
    RouterModule.register(apiRoutes),
    UsersModule
  ]
})
export class AppRoutesModule {
}
