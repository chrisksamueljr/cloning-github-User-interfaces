import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../core/github-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Event } from '../user-events/user-events.types';
import { User } from '../user.types';
import { combineLatest } from 'rxjs';


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
   combineLatest(this.route.parent.params, this.route.queryParams)
   .pipe(switchMap(
     ((params: Params[]) => {
 this.page = +params[1]['page'] || 1;
 return this.ghas.getUserFollowers(params[0]['login'], this.page, this.perPage)
})
   )).subscribe(theFollowers => console.log(theFollowers));
  }

  loadUserFollowers() {
    combineLatest(this.route.parent.params, this.route.queryParams)
   .pipe(switchMap(
     ((params: Params[]) => {
     this.page = +params[1]['page'] || 1;
     return this.ghas.getUserFollowers(params[0]['login'], this.page, this.perPage)
   })
   )).subscribe(theFollowers => this.theFollowers = theFollowers);    
  }

  ngOnInit() {
    this.loadUserFollowers();
    this.logOutTheUserFollowersEvents();
  }

  loadMore() {
    this.page++;
    this.loadUserFollowers();
  }}
