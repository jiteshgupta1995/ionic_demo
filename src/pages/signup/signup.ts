import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';

@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public http: Http) {
  }
  signup = {
  	username:"",
	password:"",
	firstname:"",
	lastname:""
  }
  signupForm() {
  	let em = this.signup.username;
    let pass = this.signup.password;
    let fname = this.signup.firstname;
    let lname = this.signup.lastname;

    this.http.post('http://localhost:3000/signup?email='+em+'&password='+pass+'&firstName='+fname+'&lastName='+lname).subscribe(data => {
		alert("Successfully signup Thank you !");
		console.log("done");
	},(err) => {
        alert("Error while signing up. Please try again!");
    });
  }
  login(){
  	this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
  }
}
