import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { DetailPage } from '../detail/detail';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-komuditas',
  templateUrl: 'komuditas.html',
})
export class KomuditasPage {
  responseData: any;
  produks: any;
  tanggal: any;
  namaPasar: any;
  empty:boolean = true;

  constructor(public navCtrl: NavController, 
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
      this.tanggal = navParams.get('pTanggal');
      this.namaPasar = navParams.get('pNamaPasar');

  }

  ionViewDidLoad() {
    this.getProduksByTanggal();
  }

  getProduksByTanggal(){
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      showBackdrop: true
    });
    loading.present();
    this.authService.getProduksByTanggal(this.tanggal).then((result) => {
      this.responseData = result;
      this.produks = this.responseData;
      loading.dismiss();
    })
  }

  openDetail(id, nama, harga, tanggal, gambar){
    let data = {
      pId: id,
      pNama: nama,
      pHarga: harga,
      pTanggal: tanggal,
      pGambar: gambar
    }
    this.navCtrl.push(DetailPage, data);
  }

  openDashboard(){
    this.navCtrl.setRoot(DashboardPage);
  }

}
