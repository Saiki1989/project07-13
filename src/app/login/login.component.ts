import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  EmailValidator
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //FormGroup is here
  loginForm!: FormGroup
  //submit false/ture check
  submitted = false;
  //from conncect
  userLogin = {
    "email": "",
    "password": "",
  }

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }


  submitLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    } else {
      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password
      if (this.userLogin.email == "admin@gmail.com" && this.userLogin.password == "123456789") {
        alert("เข้าสู่ระบบสำเร็จ")
      } else {
        alert("เข้าระบบไม่สำเร็จ")
      }
    }
  }


resetForm(){
  this.submitted = false;
  this.loginForm.reset();

}
}