import { Injectable } from '@angular/core';

import *  as moment from 'moment';
import { Repo } from '../repo/types/repo.types';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import {map} from 'rxjs';

// Import rxjs modules
// 'rxjs/add/observable/of'
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError} from  'rxjs/operators';
import  { map } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';

interface ResponseOrders {
  repo: Repo[];
}

const htttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class GithubApiService {


  private configurationURL = 'https://api.github.com';
  popularRepoUrl = `https://api.github.com/search/repositories?q=created:2019-04-01&sort=stars`;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }


    private handleError(error: any) : Promise<any> {
      console.log('An Error occured', error);

      return Promise.reject(error.message || error);
    }

  getPopularRepos(): Observable<Repo[]> {
    // let formattedDate = moment(from).utc().format('YYYY-MM-DD');
    // let params = new HttpParams();
    // params = params.set('HttpParams', formattedDate);
    return this.http.get<Repo[]>(this.popularRepoUrl);
    // .pipe(
    //   map(res => res.results as  Repo[] || []) 
    // );
 
    // .toPromise()
    // .then(response)
    // .catch(this.handleError);    
  }
}
