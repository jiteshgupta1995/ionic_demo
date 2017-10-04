import { Component } from '@angular/core';

import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = SignupPage;

  constructor() {

  }
}
