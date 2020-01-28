import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly API_URL = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) { }

  public getUsers () {
    return this.http.get(`${this.API_URL}/users`);
  }

}
