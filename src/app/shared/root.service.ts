import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { User } from './user.model';
import { UserService } from '../home/user.service';

@Injectable({
  providedIn: 'root',
})
export class RootService {
  constructor(private http: HttpClient, private userService: UserService) {}

  fetchUsers() {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) => {
          return users;
        }),
        tap((users) => {
          this.userService.setUsers(users);
        })
      );
  }
}
