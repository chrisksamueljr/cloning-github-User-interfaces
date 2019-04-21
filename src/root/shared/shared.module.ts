import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LargeNumberShortenPipe} from  './large-number-shorten.pipe';
import { RepositorySearchInputComponent } from './repository-search-input/repository-search-input.component';
// import { EventCardViewComponent } from './event-card-view/event-card-view.component';


@NgModule({
  declarations: [LargeNumberShortenPipe, 
    RepositorySearchInputComponent, 
    // EventCardViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
