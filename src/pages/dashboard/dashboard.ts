import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { KomuditasPage } from '../komuditas/komuditas';
import { AuthService } from '../../providers/auth-service/auth-service';
import { AkunPage } from '../akun/akun';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  tanggal_today:any;
  responseData:any;
  pasars:any;
  PushAkun: any;

  constructor(public navCtrl: NavController, 
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
      this.tanggal_today = new Date().toISOString().slice(0, 10);
      this.PushAkun = AkunPage;
  }

  ionViewDidLoad() {
    this.getPasars();
  }

  openKomuditas(tanggal, namaPasar){
    let data = {
      pTanggal:tanggal,
      pNamaPasar:namaPasar
    }
    this.navCtrl.push(KomuditasPage, data);
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
