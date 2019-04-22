import { Component, OnInit } from '@angular/core';
import { User } from '../user.types';
import { GithubApiService } from '../../core/github-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Event } from '../user-events/user-events.types';

@Component({
  selector: 'user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {
  // events
  events: Event[] = [];
  page = 1;
  perPage = 20;
  logToConsole: Event[];
  
  loadButtonDisabled = false;
  constructor(
    private ghas: GithubApiService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  loadUserEvents() {
    this.route.params.pipe(switchMap((params: Params) => this.ghas.getUserEvents(params['login'],this.page, this.perPage)))
    .subscribe(events => this.events = events);
    }

  logFollowers() {
    this.route.params.pipe(switchMap((params: Params) => this.ghas.getUserEvents(params['login'],this.page, this.perPage)))
    // .subscribe(events => this.events = events);
    .subscribe(events => console.log( `logged Subscribed value`,events) );
  }


  ngOnInit() {
    this.loadUserEvents();
    this.logFollowers();
  }

}
