import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: string = '';
  password: string = '';
  robot: boolean = false;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      robot: ['', [Validators.requiredTrue]]
    });
  }
  ngOnInit(): void {
  }


  public onSubmit() {
    if (!this.passwordAuthenticatorAPI(this.loginForm)) {
      this.errorMessage = 'Please enter the correct credentials'

    }
  }

  private passwordAuthenticatorAPI(formGroup: FormGroup): boolean {
    const password = formGroup.get('password')?.value;
    const email = formGroup.get('email')?.value;

    if (email === 'test@a.com' && password === 'test') {
      return true;
    } else {
      return false;
    }
  }
}


