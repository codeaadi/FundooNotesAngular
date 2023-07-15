import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/UserService/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title='login';
  login!:FormGroup;
  submitted=false;
constructor(private formBuilder:FormBuilder,
  private userservice:UserService, private route:Router){}
ngOnInit() {
    this.login=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
}
onsubmit(){
  this.submitted=true;
  console.log('Login Called',this.login.value,this.title);
  this.userservice.loginservice(this.login.value).subscribe((res:any)=>{
    console.log(res)
    localStorage.setItem('token',res.id)
    localStorage.setItem('userid',res.userId)
    this.route.navigateByUrl('/dashboard')
    
  })
}

}
