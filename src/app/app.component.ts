import { Component, ViewChild } from '@angular/core';
import { NgForm, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm; 
  genders:string[]=['male','female'];
  user = {
    username:'',
    email:'',
    gender:'',
    secret:'',
    answer:''
  };
  isSubmitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  OnSubmit(){
    this.isSubmitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.secret = this.signupForm.value.secret;
    console.log(this.signupForm);
  }
}
