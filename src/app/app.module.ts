import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "./user/user.service";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent},
  { path: 'edit', component: EditUserComponent},

  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,UserComponent, EditUserComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),HttpModule,FormsModule,HttpClientModule,ReactiveFormsModule,ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
