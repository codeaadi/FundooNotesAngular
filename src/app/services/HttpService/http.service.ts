import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type Ilogin = { email: string; password:string };
type Iregister={firstName:string; lastName:string; email:string; Password:string; confirm:string}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  BaseURL= 'http://fundoonotes.incubation.bridgelabz.com/api/'
  constructor( private httpClient:HttpClient) {}
  PostService(url: string, reqBody: any,token:boolean, httpHeadersOptions: any) {
   
    return this.httpClient.post(
      this.BaseURL + url,
      reqBody,
      token &&
      httpHeadersOptions
    );
  }
  GetService(url: string, token:boolean, httpHeadersOptions: any) {
   
    return this.httpClient.get(
      this.BaseURL + url,
      token &&
      httpHeadersOptions
    );
  }
}
