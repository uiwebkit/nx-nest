import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).compile();
  });

  describe('getUserList', (): void => {
    it('should return user list data', (): void => {
      const appController: UserController = app.get<UserController>(UserController);
      expect(appController.getUserList()).toEqual({
        'total': 2,
        'results': [
          { 'id': 1, 'name': 'John' },
          { 'id': 2, 'name': 'Doe' }
        ]
      });
    });
  });

  describe('getUserById', (): void => {
    it('should return user by id data', (): void => {
      const appController: UserController = app.get<UserController>(UserController);
      expect(appController.getUserById({ id: 1 })).toEqual({ 'id': 1, 'name': 'John' });
    });
  });
});
