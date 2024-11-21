import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

export interface UserById {
  id: number;
}

export interface UserList {
  total: number;
  results: User[];
}

export interface IUserService {
  getUserList({}): Observable<UserList>;
  getUserById(data: UserById): Observable<User>;
}
