import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

export interface UserById {
  id: number;
}

export interface IUserService {
  getUserById(data: UserById): Observable<User>;
}
