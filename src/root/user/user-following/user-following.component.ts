import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../core/github-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Event } from '../user-events/user-events.types';
import { User } from '../user.types';
import { combineLatest } from 'rxjs';


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


  // log the User Following Events
  logOutTheUserFollowingEvents() {
   combineLatest(this.route.parent.params, this.route.queryParams)
   .pipe(switchMap(
     ((params: Params[]) => {
 this.page = +params[1]['page'] || 1;
 return this.ghas.getUserFollowing(params[0]['login'], this.page, this.perPage)
})
   )).subscribe(theFollowing => console.log(theFollowing));
  }


// get the User Following Events
  loadUserFollowing() {
  combineLatest(this.route.parent.params, this.route.queryParams)
   .pipe(switchMap(
     ((params: Params[]) => {
 this.page = +params[1]['page'] || 1;
 return this.ghas.getUserFollowing(params[0]['login'], this.page, this.perPage)
})
   )).subscribe(theFollowing => this.theFollowing = theFollowing);
 }; 
  

  ngOnInit() {
    this.loadUserFollowing();
    this.logOutTheUserFollowingEvents();
  }

  loadMore() {
    this.page++;
    this.loadUserFollowing();
  }}
