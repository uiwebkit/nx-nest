import { User, UserById, users } from '@nx-nest/users';

export const getUserById = (data: UserById): User | undefined => {
  return users.find(({ id }: User): boolean => id === data.id)
}