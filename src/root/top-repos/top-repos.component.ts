import { Component, OnInit } from '@angular/core';

import { Repo } from '../repo/types/repo.types';

import { GithubApiService } from '../core/github-api.service';
@Component({
  selector: 'top-repos',
  templateUrl: './top-repos.component.html',
  styleUrls: ['./top-repos.component.css']
})
export class TopReposComponent implements OnInit {

  repo: Repo[];
  dayInterval: number = 1;


  constructor(
    private ghas: GithubApiService,
  ) { }

  ngOnInit() {
     this.loadRepos();
    //  console.log(this.repo);
   }

  loadRepos(): void {
    let d = new Date();
    d.setDate(d.getDate() - this.dayInterval);
    this.ghas.getPopularRepos(d).subscribe(repo => this.repo = repo); 
  }

}
