import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginJson, regJson } from '../JSONData/signup';
import { AuthService } from '../services/auth.service';

// export class MyErrorStateMatcher implements MyErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
//     const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

//     return (invalidCtrl || invalidParent);
//   }
// }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private as: AuthService, private router: Router) { }

  login: boolean = true;
  error: string = '';

  signindata: any;
  signupdata: any;

  move() {
    this.login = !this.login;
  }

  submit() {
    console.log(this.signupdata);
    if (this.isdisabled()) { this.error = "Please fill all fields properly."; return }
    if (this.login) {
      this.as.login(this.formlogin.value).then(res => {
        this.router.navigate(['/home']);
      })
        .catch(err => {
          this.error = err.message;
        })
    }
    else {
      this.as.signup(this.formreg.value).then(res => {
        this.router.navigate(['/home']);
      })
        .catch(err => {
          this.error = err.message;
        })
    }
  }

  isdisabled() {
    if (this.login) {
      if (this.formlogin.get('email')!.invalid) {
        return true;
      }
    }
    else {
      if (this.formreg.invalid) {
        return true;
      }
    }
    return false;
  }

  formlogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required])
  })

  formreg = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/[2-9]{2}\d{8}/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/)]),
    confirmpassword: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    this.formreg.setValidators(this.checkPasswords);
    this.signindata = loginJson;
    this.signupdata = regJson;
  }

  checkPasswords(group: FormGroup): ValidationErrors | null {
      let pass = group.controls.password.value;
      let confirmPass = group.controls.confirmpassword.value;
      return pass === confirmPass ? null : { notSame: true };
  }

  formlog(name: string) { return this.formlogin.get(name)!; }
  formregget(name: string) { return this.formreg.get(name)!; }
}