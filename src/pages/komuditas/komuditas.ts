import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-komuditas',
  templateUrl: 'komuditas.html',
})
export class KomuditasPage {
  responseData: any;
  produks: any;
  tanggal: any;
  empty:boolean = true;

  constructor(public navCtrl: NavController, 
    public authService: AuthService,
    public navParams: NavParams) {
      this.tanggal = navParams.get('pTanggal');
  }

  ionViewDidLoad() {
    this.getProduksByTanggal();
  }

  getProduksByTanggal(){
    this.authService.getProduksByTanggal(this.tanggal).then((result) => {
      this.responseData = result;
      this.produks = this.responseData;

      console.log(this.responseData);
      
    })
  }

  openDetail(id, nama, harga, tanggal){
    let data = {
      pId: id,
      pNama: nama,
      pHarga: harga,
      pTanggal: tanggal
    }
    this.navCtrl.push(DetailPage, data);
  }

}
