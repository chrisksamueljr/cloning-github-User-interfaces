

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';


import { Repo } from '../../repo/types/repo.types';
import { GithubApiService } from '../../core/github-api.service';


@Component({
  selector: 'repo-search-box',
  templateUrl: './repository-search-input.component.html',
  styleUrls: ['./repository-search-input.component.css']
})
export class RepositorySearchInputComponent implements OnInit {

  public model: any;

  // search = (term: Observable<string>) =>
  //   term
  //     .debounceTime(200)
  //     .distinctUntilChanged()
  //     //Do not search with empty term
  //     .switchMap(t => t ? this.githubApiService.searchRepos(t) : Observable.of<Repo[]>([]))
  //     .catch(error => {
  //       // TODO: real error  handling
  //       console.log(error);
  //       return Observable.of<Repo[]>([]);
  //     })
  //     .map(rs => rs.map(r => r.full_name))


  constructor(
    private githubApiService: GithubApiService,
    private router: Router,
  ) { }

  navigateToRepo(event: NgbTypeaheadSelectItemEvent) {
    this.router.navigate([`/repo/${event.item}`]);
  }

  ngOnInit() {

  }

}
