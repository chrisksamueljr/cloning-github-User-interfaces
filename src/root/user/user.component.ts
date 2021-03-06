import { Component, OnInit } from '@angular/core';
import { User } from './user.types';
import { GithubApiService } from '../core/github-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // User
  user: User;

  constructor(
    private ghas: GithubApiService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }


  logUserEventsToConsole() {
    this.activatedRoute.params.pipe(switchMap((params: Params) => this.ghas.getUser(params['login'])))
    .subscribe(
      user => console.log(`logUserEventsToConsole(): `,user));
  }

  loadUserEvents() {
      // this.activatedRoute.params.subscribe(data => console.log(data)); // {login: "user-name"}
      this.activatedRoute.params.pipe(switchMap((params: Params) => this.ghas.getUser(params['login'])))
      .subscribe(
        user => 
        // console.log(user)
        this.user = user
        
        );
  }
  

  ngOnInit() {
    this.loadUserEvents();
    this.logUserEventsToConsole();
  }

}
