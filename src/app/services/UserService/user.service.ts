import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpService } from '../HttpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  loginservice(reqpayload:any){
    let httpHeadersOptions={
      headers : new HttpHeaders({
        contentType: 'application/json',
      }),
    }
    return this.httpService.PostService(
      '/user/user_login',
      reqpayload,
      httpHeadersOptions
    )
  }
  registrationservice(reqpayload: any) {
    let httpHeadersOptions = {
      headers: new HttpHeaders({
        contentType: 'application/json',
      }),
    };
    return this.httpService.PostService(
      'user/userSignUp',
      reqpayload,
      httpHeadersOptions
    );
  }
}
