import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpService } from '../HttpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
token:any;
  constructor(private httpService:HttpService) { }

  createnote(reqdata:any){
    this.token = localStorage.getItem('token');
  
    let httpHeadersOptions={
      headers : new HttpHeaders({
        contentType: 'application/json',
        authorization:this.token
      }),
    }
    return this.httpService.PostService('notes/addNotes', reqdata,true,httpHeadersOptions)
  }
  getallNote(){
    this.token = localStorage.getItem('token');
  
    let httpHeadersOptions={
      headers : new HttpHeaders({
        contentType: 'application/json',
        authorization:this.token
      }),
    }
    return this.httpService.GetService('notes/getNotesList',true,httpHeadersOptions)
  }

}
