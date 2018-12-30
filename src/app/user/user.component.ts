import { Component, OnInit } from '@angular/core';
import {User} from "./User.module";
import {Router, Routes} from "@angular/router";
import {UserService} from "./user.service";
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(public router:Router,public userService:UserService) { }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };
  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };
  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit']);
  };
}
