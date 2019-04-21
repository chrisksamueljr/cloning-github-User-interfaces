import { Injectable } from '@angular/core';

import *  as moment from 'moment';


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import {map} from 'rxjs';
// Import rxjs modules
// 'rxjs/add/observable/of'
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';

import { User } from '../user/user.types';
import { Event } from '../user/user-events/user-events.types';
import { Repo } from '../repo/types/repo.types';
import { EventType } from '../user/user-events/user-events.types';
import { RepoComponent } from '../repo/repo.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GithubApiService {


  private configurationURL = 'https://api.github.com/';
  private popularRepoUrl = `search/repositories?q=created:`;


  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  private handleError(error: any): Promise<any> {
    console.log('An Error occured', error);

    return Promise.reject(error.message || error);
  }

  getPopularRepos(from: Date): Observable<Repo[]> {
    let formattedDate = moment(from).utc().format('YYYY-MM-DD');
    // let params = new HttpParams();
    // params = params.set('HttpParams', formattedDate);
    console.log(` ServiceUrl built below:
    ${this.configurationURL}${this.popularRepoUrl}${formattedDate}&sort=stars
    `);
    return this.http.get<Repo[]>(`${this.configurationURL}${this.popularRepoUrl}${formattedDate}&sort=stars`);

  }
  // Get User
  getUser(login: string): Observable<User> {
    console.log(` getUser(): ${this.configurationURL}users/${login}`)
    return this.http.get<User>(`${this.configurationURL}users/${login}`);

  }

  // searchRepos   
  searchRepos(query: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.configurationURL}/search/repositories?q=${query}`);
  }


  // List public User Events performed by a user
  getUserEvents(login: string, page = 1, perPage: number): Observable<Event[]> {
    console.log(` getUserEvents(): URL ${this.configurationURL}users/${login}/repos?page=${page}&per_page=${perPage}&sort=updated`)
    return this.http.get<Event[]>(`${this.configurationURL}users/${login}/repos?page=${page}&per_page=${perPage}&sort=updated`);
  }


  // User Recieved Events
  getUserRecievedEvents(login: string, page = 1, perPage: number): Observable<Event[]> {
    console.log(` getUserRecievedEvents(): ${this.configurationURL}/users/${login}/received_events?page=${page}&per_page=${perPage}&sort=updated`)
    return this.http.get<Event[]>(`${this.configurationURL}users/${login}/received_events?page=${page}&per_page=${perPage}&sort=updated`)

  }

  // getUserFollowers 
  getUserFollowers(login: string, page = 1, perPage: number): Observable<User[]> {
    console.log(`${this.configurationURL}/users/${login}/following?page=${page}&per_page=${perPage}`)
    return this.http.get<User[]>(`${this.configurationURL}users/${login}/following?page=${page}&per_page=${perPage}`)
  }

  // Get the User's Following
  getUserFollowing(login: string, page = 1, perPage: number): Observable<User[]> {
    console.log(`${this.configurationURL}/users/${login}/following?page=${page}&per_page=${perPage}`)
    return this.http.get<User[]>(`${this.configurationURL}/users/${login}/following?page=${page}&per_page=${perPage}`)
  }

  getUserRepos(login: string, page = 1, perPage: number): Observable<Repo[]> {
    console.log(`getUserRepos(): ${this.configurationURL}users/${login}/repos?page=${page}&per_page=${perPage}&sort=updated`);
    return this.http.get<Repo[]>(`${this.configurationURL}users/${login}/repos?page=${page}&per_page=${perPage}&sort=updated`)
  }

}
