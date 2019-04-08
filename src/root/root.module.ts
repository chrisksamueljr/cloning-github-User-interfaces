import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './root.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { TopReposComponent } from './top-repos/top-repos.component';



import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    RootComponent,
    UserComponent,
    RepoComponent,
    TopReposComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FormsModule,
    NgbModule.forRoot(),

    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
