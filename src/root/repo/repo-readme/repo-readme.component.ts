import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';
import {GithubApiService} from '../../core/github-api.service';


import { Repo } from '../types/repo.types';

@Component({
  selector: 'repo-readme',
  templateUrl: './repo-readme.component.html',
  styleUrls: ['./repo-readme.component.css']
})
export class RepoReadmeComponent implements OnInit {

	repoReadme: string
  singleRepo: any
  
  constructor (
    private ghas: GithubApiService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {

    // this.activatedRoute.params.subscribe(data => console.log(data)); // {login: "user-name"}
    this.activatedRoute.params.pipe(switchMap((params: Params) => 
    // console.log(params)
    this.ghas.getRepoReadme(params['owner'], params['name'])))
    // .subscribe(repos => console.log(repoReadme));
    .subscribe(repoReadme => this.repoReadme = repoReadme );
  

  }

  decodeTheReadMeContent(readmeFile) {
    const file = readmeFile;
    console.log(`Calling the decodeTheReadMeContent()`);
  }



ngOnInit() {  


       this.activatedRoute.params.pipe(switchMap((params: Params) => 
    // console.log(params)
    this.ghas.getRepo(params['owner'], params['name'])))
    // .subscribe(repos => console.log(repos));
    .subscribe(singleRepo => this.singleRepo = singleRepo );
  
  }


}
