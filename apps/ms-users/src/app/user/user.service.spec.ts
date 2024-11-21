import { Test, TestingModule } from '@nestjs/testing';

import { UserService } from './user.service';

describe('UserService', (): void => {
  let service: UserService;

  beforeAll(async (): Promise<void> => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [UserService]
    }).compile();

    service = app.get<UserService>(UserService);
  });

  describe('getUserList', (): void => {
    it('should return user list data', (): void => {
      expect(service.getUserList()).toEqual({
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
      expect(service.getUserById({ id: 1 })).toEqual({ 'id': 1, 'name': 'John' });
    });
  });
});
