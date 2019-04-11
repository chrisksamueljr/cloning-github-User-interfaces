

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,of, Subject } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
import { debounceTime,distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
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
   items: Array<string>
   term$ = new Subject<string>()
//   search = (term: Observable<string>) =>
//     term.pipe(debounceTime(200)
//     ,distinctUntilChanged()
//     //Do not search with empty term
//     ,switchMap(t => t ? this.githubApiService.searchRepos(t) : Observable.of<Repo[]>([]))
//     ,catchError(error => {
//       // TODO: real error  handling
//       console.log(error);
//       return of<Repo[]>([]);
//     })
//     , map(rs => rs.map(r => r.full_name))
// )
      

  constructor(
    private githubApiService: GithubApiService,
    private router: Router,
  ) { 
    this.term$.pipe(debounceTime(400))
  }

  navigateToRepo(event: NgbTypeaheadSelectItemEvent) {
    this.router.navigate([`/repo/${event.item}`]);
  }

  ngOnInit() {

  }

}
