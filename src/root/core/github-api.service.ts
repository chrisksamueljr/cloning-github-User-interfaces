import { Injectable } from '@angular/core';

import *  as moment from 'moment';
import { Repo } from '../repo/types/repo.types';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import {map} from 'rxjs';
// Import rxjs modules
// 'rxjs/add/observable/of'
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError} from  'rxjs/operators';
import  { map } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';

import { User } from '../user/user.types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class GithubApiService {


  private configurationURL = 'https://api.github.com/';
  private popularRepoUrl = `search/repositories?q=created:`;
  

  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }
    private handleError(error: any) : Promise<any> {
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
  console.log(`Calling the searchRepos method`)
 return this.http.get<Repo[]>(`${this.configurationURL}/search/repositories?q=${query}`);
}


}
