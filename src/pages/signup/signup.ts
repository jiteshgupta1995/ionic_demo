import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }
  signup = {}
  signupForm() {
  	let em = this.signup.username;
    let pass = this.signup.password;
    let fname = this.signup.firstname;
    let lname = this.signup.lastname;

    this.http.post('https://localhost:8080/spring-mvcApp/signup',
	{ 
	  email : em,
	  password : pass,
	  firstName: fname,
	  lastName: lname
	},
	{
	  headers: { 'Content-Type': 'application/json' }
	})
	.then(data => {
	  console.log(data.data);
	}).catch(error => {
	  console.log(error.status);
	});
  }
}
