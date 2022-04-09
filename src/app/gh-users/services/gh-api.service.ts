import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhUser } from '../models/ghUser';
import { GhRepository } from '../models/ghRepository';

@Injectable()
export class GhApiService {

  private readonly baseUrl: string = 'https://api.github.com/users'

  constructor(
    private http: HttpClient
  ) { }

  findUser(username: string): Observable<GhUser> {
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }
  findRepository(username: string): Observable<GhRepository[]>{
    return this.http.get<GhRepository[]>(`${this.baseUrl}/${username}/repos`)
  }
}
