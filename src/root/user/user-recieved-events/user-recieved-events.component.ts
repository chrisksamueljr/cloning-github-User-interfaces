import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../core/github-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Event } from '../user-events/user-events.types';
@Component({
  selector: 'user-recieved-events',
  templateUrl: './user-recieved-events.component.html',
  styleUrls: ['./user-recieved-events.component.css']
})
export class UserRecievedEventsComponent implements OnInit {

  events: Event[] = [];
  page = 1;
  perPage = 20;
  loadButtonDisabled = false;

  constructor(
    private ghas: GithubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  // getUserRecievedEvents
  loadEvents() {
    this.route.params.pipe(switchMap((params: Params) => this.ghas.getUserRecievedEvents(params['login'],this.page, this.perPage)))
    // .subscribe(events => this.events = events);
    .subscribe(followers => console.log( `logged Subscribed value`,followers) );
  }

  ngOnInit() {
    this.loadEvents();
  }

  loadMore() {
    this.page++;
    this.loadEvents();
  }
}
