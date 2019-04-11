import { Component, OnInit } from '@angular/core';
import { User } from './user.types';
import { GithubApiService } from '../core/github-api.service';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.pipe(switchMap(() => this.ghas.getUser(params['login'])))
    .subscribe(user => this.user = user);
  }

}
