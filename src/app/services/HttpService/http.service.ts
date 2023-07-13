import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type Ilogin = { email: string; password:string };
type Iregister={FirstName:string; LastName:string; UserName:string; password:string; confirm:string}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  BaseURL= 'http://fundoonotes.incubation.bridgelabz.com/api/'
  constructor( private httpClient:HttpClient) {}
  PostService(url: string, reqBody: Ilogin|Iregister, httpHeadersOptions: Object) {
    return this.httpClient.post(
      this.BaseURL + url,
      reqBody,
      httpHeadersOptions
    );
  }
}
