import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, combineLatest } from 'rxjs';
// import 'rxjs/add/observable/combineLatest';
// import 'rxjs/add/operator/switchMap';
import { User } from '../user.types';
import { GithubApiService } from '../../core/github-api.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit {

  followers: User[];
  page: number;
  perPage = 51;

  constructor(
    private ghas: GithubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
   combineLatest(this.route.parent.params, this.route.queryParams)
    .pipe(switchMap(
      ((ps: Params[]) => {
  this.page = +ps[1]['page'] || 1;
  return this.ghas.getUserFollowers(ps[0]['login'], this.page, this.perPage)
})
    )).subscribe(followers => console.log( `logged Subscribed value`,followers) );
  }

}


