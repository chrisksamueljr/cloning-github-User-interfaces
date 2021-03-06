import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserReposComponent } from './user-repos/user-repos.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { UserCardViewComponent } from './shared/user-card-view/user-card-view.component';
import { UserFollowingComponent } from './user-following/user-following.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { UserRecievedEventsComponent } from './user-recieved-events/user-recieved-events.component';
import { EventCardViewComponent } from './event-card-view/event-card-view.component';

@NgModule({
  declarations: [
    UserComponent,
    UserReposComponent, 
    UserEventsComponent, 
    UserCardViewComponent, 
    UserFollowingComponent, 
    UserFollowersComponent, 
    UserRecievedEventsComponent,
    EventCardViewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
