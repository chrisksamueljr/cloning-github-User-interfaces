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

import { RepoResponse } from '../repo/types/repo-response.types';

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

  getPopularRepos(from: Date): Observable<RepoResponse> {
    let formattedDate = moment(from).utc().format('YYYY-MM-DD');
    // let params = new HttpParams();
    // params = params.set('HttpParams', formattedDate);
    console.log(` ServiceUrl built below:
    ${this.configurationURL}${this.popularRepoUrl}${formattedDate}&sort=stars
    `);
    return this.http.get<RepoResponse>(`${this.configurationURL}${this.popularRepoUrl}${formattedDate}&sort=stars`);
  
  }
  // Get User
  getUser(login: string): Observable<User> {
    console.log(` getUser(): ${this.configurationURL}users/${login}`)
    return this.http.get<User>(`${this.configurationURL}users/${login}`);

  }


  // Get a Single Repo
  getRepo(owner: string, repoName: string): Observable<Repo> {
    console.log(`getRepo(): ${this.configurationURL}repos/${owner}/${repoName}`)
    return this.http.get<Repo>(`${this.configurationURL}repos/${owner}/${repoName}`);
  }

  // searchRepos   
  searchRepos(query: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`searchRepos(): ${this.configurationURL}/search/repositories?q=${query}`);
  }


  // List public User Events performed by a user
  getUserEvents(login: string, page = 1, perPage: number): Observable<Event[]> {
    console.log(` getUserEvents(): URL ${this.configurationURL}users/${login}/events?page=${page}&per_page=${perPage}&sort=updated`)
    return this.http.get<Event[]>(`${this.configurationURL}users/${login}/events?page=${page}&per_page=${perPage}&sort=updated`);
  }


  // User Recieved Events
  getUserRecievedEvents(login: string, page = 1, perPage: number): Observable<Event[]> {
    console.log(` getUserRecievedEvents(): ${this.configurationURL}/users/${login}/received_events?page=${page}&per_page=${perPage}&sort=updated`)
    return this.http.get<Event[]>(`${this.configurationURL}users/${login}/received_events?page=${page}&per_page=${perPage}&sort=updated`)

  }

  // getUserFollowers 
  getUserFollowers(login: string, page = 1, perPage: number): Observable<User[]> {
    console.log(`getUserFollowers(): ${this.configurationURL}users/${login}/followers?page=${page}&per_page=${perPage}`)
                               // ${this.configurationURL}users/${login}/followers?page=${page}&per_page=${perPage}   
    return this.http.get<User[]>(`${this.configurationURL}users/${login}/followers?page=${page}&per_page=${perPage}`)
  }

  // Get the User's Following
  getUserFollowing(login: string, page = 1, perPage: number): Observable<User[]> {
    console.log(`getUserFollowing(): ${this.configurationURL}users/${login}/following?page=${page}&per_page=${perPage}`)
       return this.http.get<User[]>(`${this.configurationURL}users/${login}/following?page=${page}&per_page=${perPage}`)
  }
 
  // Get the User's Repo
  getUserRepos(login: string, page = 1, perPage: number): Observable<Repo[]> {
    console.log(`getUserRepos(): ${this.configurationURL}users/${login}/repos?page=${page}&per_page=${perPage}&sort=updated`);
    return this.http.get<Repo[]>(`${this.configurationURL}users/${login}/repos?page=${page}&per_page=${perPage}&sort=updated`)
  }

  // Get Repository Readme file
  getRepoReadme(owner: string, repoName: string): Observable<string> {
    console.log(`getRepoReadme(): ${this.configurationURL}repos/${owner}/${repoName}/readme`);
    return this.http.get<string>(`${this.configurationURL}repos/${owner}/${repoName}/readme`)
  }

  // Get Repo Events
  getRepoEvents(owner: string, repoName: string, page = 1, perPage: number): Observable<Event[]> {
    console.log(`getRepoEvents(): ${this.configurationURL}/repos/${owner}/${repoName}/events?page=${page}&per_page=${perPage}`);
    return this.http.get<Event[]>(`${this.configurationURL}/repos/${owner}/${repoName}/events?page=${page}&per_page=${perPage}`)
  }

/**
 * 
 * getRepoEvents(owner: string, repoName: string, page = 1, perPage: number): Promise<Event[]> {
        return this.http
            .get(`${this.apiURL}/repos/${owner}/${repoName}/events?page=${page}&per_page=${perPage}`)
            .toPromise()
            .then(response => response.json() as Event[])
            .catch(this.handleError);
    }
 **/


}
