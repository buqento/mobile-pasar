import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData = {
    'username': '',
    'password': ''
  }
  password_type: string = 'password';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  togglePasswordMode(){
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
