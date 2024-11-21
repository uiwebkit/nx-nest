import { Test, TestingModule } from '@nestjs/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [UsersService]
    }).compile();

    service = app.get<UsersService>(UsersService);
  });

  describe('getUser', () => {
    it('should return user data', () => {
      expect(service.getUser(1)).toEqual({ id: 1, name: 'John' });
    });
  });
});
