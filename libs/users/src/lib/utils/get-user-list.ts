import { UserList, users } from '@nx-nest/users';

export const getUserList = (): UserList => {
  return {
    total: users.length,
    results: users
  };
}