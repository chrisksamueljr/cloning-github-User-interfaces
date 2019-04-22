import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../core/github-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Event } from '../user-events/user-events.types';
import { User } from '../user.types';


@Component({
  selector: 'user-following',
  templateUrl: './user-following.component.html',
  styleUrls: ['./user-following.component.css']
})
export class UserFollowingComponent implements OnInit {

  theFollowing: User[];
  page = 1;
  perPage = 20;
  loadButtonDisabled = false;

  constructor(
    private ghas: GithubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  // get the User Following Events
  logOutTheUserFollowingEvents() {
    this.route.params.pipe(switchMap((params: Params) => this.ghas.getUserFollowing(params['login'],this.page, this.perPage)))
    // .subscribe(events => this.events = events);
    .subscribe(theFollowing => console.log( `logged Subscribed value`,theFollowing) );
  }

  loadUserFollowing() {
this.route.params.pipe(switchMap((params: Params) => this.ghas.getUserFollowing(params['login'],this.page, this.perPage)))
    .subscribe(theFollowing => this.theFollowing = theFollowing);
    // .subscribe(theFollowing => console.log( `logged Subscribed value`,theFollowing) );    
  }

  ngOnInit() {
    this.loadUserFollowing();
    this.logOutTheUserFollowingEvents();
  }

  loadMore() {
    this.page++;
    this.loadUserFollowing();
  }}
