import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title='Registration'
  registerForm!:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,
    private userservice: UserService, private route:Router){}
ngOnInit() {
    this.registerForm=this.formBuilder.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      UserName:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]] ,
      confirm:['',Validators.required]
    })
  }
  onsubmit(){
     const req={
      firstName:this.registerForm.value.FirstName,
      lastName:this.registerForm.value.LastName,
      email:this.registerForm.value.UserName,
      password:this.registerForm.value.password,
      service:'advance'
    }
    this.submitted=true;
console.log('registration called',req,this.title);
this.userservice.registrationservice(req).subscribe((res:any)=>{
  console.log(res);
  
})
this.route.navigateByUrl('')
  }
}


