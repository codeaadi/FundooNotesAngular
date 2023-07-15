import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpService } from '../HttpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
token:any;
  constructor(private httpService:HttpService) { }
  loginservice(reqpayload:any){
    let httpHeadersOptions={
      headers : new HttpHeaders({
        contentType: 'application/json',
      }),
    }
    return this.httpService.PostService(
      'user/login',
      reqpayload,
      false,
      httpHeadersOptions
    )
  }
  registrationservice(reqpayload: any) {
    
    let httpHeadersOptions = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization:this.token
      }),
    };
    return this.httpService.PostService(
      'user/userSignUp',
      reqpayload,
      false,
      httpHeadersOptions
      );
      
  }
}
