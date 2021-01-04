import { Injectable } from '@angular/core';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [];

  addUser(user: User) {
    this.userList.push(user);
  }

  getUsers() {
    return this.userList;
  }

  constructor() { }
}
