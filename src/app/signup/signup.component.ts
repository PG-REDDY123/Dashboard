import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registrationForm!: FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOninit() {
    this.registrationForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      gender: ["", [Validators.required]],
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
   
  }
  url = "assets/images/Skywaves-logo.webp";
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log("Form submitted", this.registrationForm.value);
    }

  }
  Genderoptions:string[] = [
    "Male", "Female", "Others"
  ];
  selectedgender: any;
  get name() {
    return this.registrationForm.get("name");
  }
  get email() {
    return this.registrationForm.get("email");
  }
  get gender() {
    return this.registrationForm.get("gender");
  }
  get password() {
    return this.registrationForm.get("password");
  }
  get username() {
    return this.registrationForm.get("username");
  }
}
