  import { Component, OnInit } from '@angular/core';

import { Repo } from '../repo/types/repo.types';
import { RepoResponse } from '../repo/types/repo-response.types';
import { LargeNumberShortenPipe } from  '../shared/large-number-shorten.pipe';
import { GithubApiService } from '../core/github-api.service';

@Component({
  selector: 'top-repos',
  templateUrl: './top-repos.component.html',
  styleUrls: ['./top-repos.component.css']
})
export class TopReposComponent implements OnInit {

  // repo: Repo[];
  response: RepoResponse;
  dayInterval: number ;


  constructor(
    private ghas: GithubApiService,
  ) { }

  ngOnInit() {
    this.dayInterval = 30
     this.loadRepos();
    //  console.log(this.repo);
   }

  loadRepos(): void {
    let d = new Date();
    d.setDate(d.getDate() - this.dayInterval);
    this.ghas.getPopularRepos(d).subscribe(response => this.response = response); 
  }

}
