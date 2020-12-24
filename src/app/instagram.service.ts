import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from './instagram';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(protected http: HttpClient) { }

  getPost(page: number, results: number): Observable<Post> {
    return this.http.get<Post>(environment.baseUrl + `api/?page=${page}&results=${results}&seed=feed`);
  }
}
