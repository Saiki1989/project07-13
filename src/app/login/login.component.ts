import { Component } from '@angular/core';
import {
  ReactiveFormsModule,  
  FormsModule,
  FormGroup,             
  FormBuilder,           
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']        
})
export class LoginComponent {
  //form: FormGroup
  loginFrom! : FormGroup;
  //สร้างตัวแปรไว้เซ็ตว่า Submit from หรือยัง
  submitted = false
  //ตัวแปรสำหรับผูกกับฟอร์ม
  userLogin ={
    "email": "",
    "password": "" 
  }
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
  this.loginFrom = this.formBuilder.group({
     email:['', [Validators.required, Validators.email]],
     password:['', [Validators.required, Validators.minLength(6)]],
   })
 }
//ปุ่มล็อคอิน
 submitLogin() {
  this.submitted = true;
  //ถ้าฟอร์มไม่ถูกต้อง (invalid)
  if (this.loginFrom.invalid) { 
    return
  }else{
    this.userLogin.email = this.loginFrom.value.email
    this.userLogin.password = this.loginFrom.value.password
    if(this.userLogin.email == "admin@gmail.com" 
      && this.userLogin.password == "123456789"){
        alert("Login Successful")
  
    }else{
      alert("Login Failed")
      }
    }
  }
//ปุ่ม reset From
resetFrom(){
  this.submitted = false;
  this.loginFrom.reset();
}
}
