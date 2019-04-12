import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
// import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserReposComponent } from './user-repos/user-repos.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { UserCardViewComponent } from './user-card-view/user-card-view.component';
import { UserFollowingComponent } from './user-following/user-following.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { UserRecievedEventsComponent } from './user-recieved-events/user-recieved-events.component';

@NgModule({
  declarations: [
    UserReposComponent, 
    UserEventsComponent, 
    UserCardViewComponent, 
    UserFollowingComponent, 
    UserFollowersComponent, 
    UserRecievedEventsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
