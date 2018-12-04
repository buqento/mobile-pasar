import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { KomuditasPage } from '../komuditas/komuditas';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  dt:any;
  responseData:any;
  pasars:any;

  constructor(public navCtrl: NavController, 
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
      this.dt = new Date().toISOString().slice(0, 10);
  }

  ionViewDidLoad() {
    this.getPasars();
  }

  openKomuditas(tanggal){
    let data = {
      pTanggal:tanggal
    }
    this.navCtrl.setRoot(KomuditasPage, data);
  }

  getPasars(){
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      showBackdrop: true
    });
    loading.present();
    this.authService.getPasars().then((result) =>{
      this.responseData = result;
      this.pasars = this.responseData;
      loading.dismiss();
    })
  }
}
