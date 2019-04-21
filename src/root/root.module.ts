import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './root.component';


import { RepoComponent } from './repo/repo.component';
import { TopReposComponent } from './top-repos/top-repos.component';

import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RootRoutingModule } from './root-routing.module';
import { RepoReadmeComponent } from './repo/repo-readme/repo-readme.component';
import { RepoEventsComponent } from './repo/repo-events/repo-events.component';

@NgModule({
  declarations: [
    RootComponent,
    RepoComponent,
    TopReposComponent,
    RepoReadmeComponent,
    RepoEventsComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonToggleModule,
    FormsModule,
    RootRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),

    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
