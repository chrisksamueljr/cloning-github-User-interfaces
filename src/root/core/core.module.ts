import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubApiService } from './github-api.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [GithubApiService],
  exports: []
})
export class CoreModule { }
