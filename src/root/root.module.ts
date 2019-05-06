import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './root.component';


import { TopReposComponent } from './top-repos/top-repos.component';

import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { RootRoutingModule } from './root-routing.module';
import { RepositorySearchInputComponent } from './shared/repository-search-input/repository-search-input.component';


@NgModule({
  declarations: [
    RootComponent,
    RepositorySearchInputComponent,
    TopReposComponent,


  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    RootRoutingModule,
    HttpClientModule,
    NgbModule,

    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
