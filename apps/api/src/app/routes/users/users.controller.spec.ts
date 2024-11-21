import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();
  });

  describe('getUser', () => {
    it('should return user data', () => {
      const appController: UsersController = app.get<UsersController>(UsersController);
      expect(appController.getUser(1)).toEqual({ id: 1, name: 'John' });
    });
  });
});
