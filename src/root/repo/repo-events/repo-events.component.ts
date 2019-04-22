import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user.types';
import { Repo } from '../types/repo.types';
import { Event } from '../../user/user-events/user-events.types'
import { GithubApiService } from '../../core/github-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'repo-events',
  templateUrl: './repo-events.component.html',
  styleUrls: ['./repo-events.component.css']
})
export class RepoEventsComponent implements OnInit {


  events: Event[] = [];
  page = 1;
  perPage = 20;

  constructor(
    private ghas: GithubApiService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.loadRepoEvents();
  }



  loadRepoEvents() {
    // this.activatedRoute.params.subscribe(data => console.log(data)); // {login: "user-name"}
    this.activatedRoute.params.pipe(switchMap((params: Params) => this.ghas.getUser(params['login'])))
      .subscribe(
        user =>
          console.log(user)
        // this.user = user

      );
  }


  // Load More Events
  loadMore() {
    this.page++;
    this.loadRepoEvents();
  }

}
