// Angular Modules 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// Types
import { User } from '../user/user.types';
import { Repo } from './types/repo.types';

// Github Service using the HTTP Service
import { GithubApiService } from '../core/github-api.service';

// RxJS Operators and Functions
import { switchMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos: Repo[];
  // page: number;
  // perPage = 51;

  constructor(
    private ghas: GithubApiService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }



  ngOnInit() {

    this.activatedRoute.params.subscribe(data => console.log(data)); // {login: "user-name"}
    
    // this.route.params.pipe(switchMap((params: Params) => 
    // // console.log(params)
    // this.ghas.getRepo(params['login'])))
    // .subscribe(repos => this.repos = repos);
  }

  
}