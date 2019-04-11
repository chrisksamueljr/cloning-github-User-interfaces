import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LargeNumberShortenPipe} from  './large-number-shorten.pipe';
import { RepositorySearchInputComponent } from './repository-search-input/repository-search-input.component';


@NgModule({
  declarations: [LargeNumberShortenPipe, RepositorySearchInputComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
