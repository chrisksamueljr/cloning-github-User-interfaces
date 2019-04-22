import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../core/github-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Event } from '../user-events/user-events.types';
import { User } from '../user.types';


@Component({
  selector: 'user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit {

  theFollowers: User[];
  page = 1;
  perPage = 20;
  loadButtonDisabled = false;

  constructor(
    private ghas: GithubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  // get the User Following Events
  logOutTheUserFollowersEvents() {
    this.route.params.pipe(switchMap((params: Params) => this.ghas.getUserFollowers(params['login'],this.page, this.perPage)))
    // .subscribe(events => this.events = events);
    .subscribe(theFollowers => console.log( `logged Subscribed value`,theFollowers) );
  }

  loadUserFollowers() {
this.route.params.pipe(switchMap((params: Params) => this.ghas.getUserFollowers(params['login'],this.page, this.perPage)))
    .subscribe(theFollowers => this.theFollowers = theFollowers);
    // .subscribe(theFollowers => console.log( `logged Subscribed value`,theFollowers) );    
  }

  ngOnInit() {
    this.loadUserFollowers();
    this.logOutTheUserFollowersEvents();
  }

  loadMore() {
    this.page++;
    this.loadUserFollowers();
  }}
