import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './root.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { TopReposComponent } from './top-repos/top-repos.component';

import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RootRoutingModule } from './root-routing.module';

@NgModule({
  declarations: [
    RootComponent,
    UserComponent,
    RepoComponent,
    TopReposComponent,

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
