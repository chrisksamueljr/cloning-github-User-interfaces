import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { UserComponent } from './user.component';
import { UserFollowingComponent } from './user-following/user-following.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { UserRecievedEventsComponent } from './user-recieved-events/user-recieved-events.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';

const routes: Routes = [
  {
    path: ':login', component: UserComponent,
    children: [
      { path: '', component: UserEventsComponent },
      { path: 'recieved-events', component: UserRecievedEventsComponent },
      { path: 'followers', component: UserFollowersComponent },
      { path: 'following', component: UserFollowingComponent },
      { path: 'repos', component: UserReposComponent }
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
