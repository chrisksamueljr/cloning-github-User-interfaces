import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepoComponent } from './repo.component';
import { RepoReadmeComponent } from './repo-readme/repo-readme.component';
import { RepoEventsComponent } from './repo-events/repo-events.component';
// import our custom generated AuthGuard 
import { AuthGuard } from  '../auth.guard';

const routes: Routes = [
    {
        path: ':owner/:name',
        component: RepoComponent,
        children: [
            { 
                path: '',
                component: RepoReadmeComponent,
                canActivate: [AuthGuard]
             },
            { path: 'events', component: RepoEventsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepoRoutingModule { }