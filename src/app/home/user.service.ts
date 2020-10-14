import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[] = [];
  newId: number;
  usersChanged = new Subject<User[]>();

  constructor() {}

  setUsers(users: User[]) {
    this.newId = users.length + 1;
    this.users = users;
    this.usersChanged.next(this.users.slice());
  }

  getUsers() {
    return this.users.slice();
  }

  onDeleteUser(index: number) {
    this.users.splice(index, 1);
    this.usersChanged.next(this.users.slice());
  }

  addUser(user: User) {
    user.id = this.newId;
    this.newId++;
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }

  editUser(user: any, index: number) {
    this.users[index].id = user.id;
    this.users[index].username = user.username;
    this.users[index].email = user.email;
    this.users[index].address.city = user.city;
    this.users[index].phone = user.phone;
    this.users[index].company.name = user.company;
    this.usersChanged.next(this.users.slice());
  }
}
