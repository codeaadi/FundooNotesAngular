import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/UserService/user.service';

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
    private userservice: UserService){}
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
    }
    this.submitted=true;
console.log('registration called',this.registerForm.value,this.title);
this.userservice.registrationservice(this.registerForm.valid).subscribe((res:any)=>{
  console.log(res);
  
})

  }
}


