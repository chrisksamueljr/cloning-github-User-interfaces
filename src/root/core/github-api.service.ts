import { Injectable } from '@angular/core';

import *  as moment from 'moment';
import { Repo } from '../repo/types/repo.types';


@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  

  constructor() { }


  getPopularRepos(from: Date): Promise<Repo[]> {
    let formattedDate = moment(from).utc().format('YYYY-MM-DD');
    return
    
  }
}
