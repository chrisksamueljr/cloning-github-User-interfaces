import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TopReposComponent } from './top-repos/top-repos.component';


const routes: Routes = [
  { path: '', component: TopReposComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: 'repo', loadChildren: './repo/repo.module#RepoModule'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
