import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./User.module";
import {Http} from "@angular/http";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userUrl="http://localhost:8080/users";
  constructor(public http:HttpClient) { }



  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }
  public deleteUser( user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
  updateUser(user: User) {
    return this.http.put(this.userUrl + '/' + user.id, user);
  }
  getUserById(id: number) {
    return this.http.get<User>(this.userUrl + '/' + id);
  }

}
