// Angular Modules 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// Types
import { User } from '../user.types';
import { Repo } from '../../repo/types/repo.types';

// Github Service using the HTTP Service
import { GithubApiService } from '../../core/github-api.service';

// RxJS Operators and Functions
import { switchMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';


@Component({
  selector: 'user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {

  repos: Repo[];
  page: number;
  perPage = 51;

  constructor(
    private ghas: GithubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }



// Grab this user's Repos
 
ngOnInit() {
  combineLatest(this.route.parent.params, this.route.queryParams)
   .pipe(switchMap(
     ((ps: Params[]) => {
 this.page = +ps[1]['page'] || 1;
 return this.ghas.getUserRepos(ps[0]['login'], this.page, this.perPage)
})
   )).subscribe(followers => console.log( `logged Subscribed value`,followers) );
 }

}
