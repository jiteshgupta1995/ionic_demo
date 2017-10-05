import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForgotPage } from '../forgot/forgot';
import { SignupPage } from '../signup/signup';
import { DashboardPage } from '../dashboard/dashboard';
import { Http } from '@angular/http';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public http: Http) {

  }
  login = {
  	username: "",
  	password: ""
  };

  logForm() {
    let em = this.login.username;
    let pass = this.login.password;

    this.http.post('http://localhost:8080/spring-mvcApp/customer/login?email='+em +'&password='+pass).subscribe(data => {
		this.navCtrl.setRoot(DashboardPage, {}, {animate: true, direction: 'forward'});
	},(err) => {
        alert("Invalid Email or password. Please try again!");
    });
  }

  forgotpass(){
  	this.navCtrl.setRoot(ForgotPage, {}, {animate: true, direction: 'forward'});
  }
  signup(){
  	this.navCtrl.setRoot(SignupPage, {}, {animate: true, direction: 'forward'});	
  }
}
