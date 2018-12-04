import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KomuditasPage } from '../komuditas/komuditas';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  dt:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dt = new Date().toISOString().slice(0, 10);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openKomuditas(tanggal){
    let data = {
      pTanggal:tanggal
    }
    this.navCtrl.push(KomuditasPage, data);
  }
}
