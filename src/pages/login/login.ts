import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ForgotPage } from '../forgot/forgot';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  login = {};

  logForm() {
    let em = this.login.username;
    let pass = this.login.password;

    this.http.post('https://localhost:8080/spring-mvcApp/login',
	{ 
	  email : em,
	  password : pass
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

  forgotpass(){
  	console.log("go to forgotpass");
  	this.navCtrl.setRoot(ForgotPage, {}, {animate: true, direction: 'forward'});
  }
}
