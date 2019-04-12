import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { UserComponent } from './user.component';
import { UserEventsComponent } from './user-events/user-events.component';
const routes: Routes = [
  {
    path: ':login', component: UserComponent,
    children: [
      {path: '', component: UserEventsComponent}
  ] 
  }
];


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
