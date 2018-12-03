import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  responseData: any;
  produks: any;

  constructor(public navCtrl: NavController, 
    public authService: AuthService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getProduk();
  }

  getProduk(){
    this.authService.getProduks().then((result) => {
      this.responseData = result;
      this.produks = this.responseData;
    })
  }

  openDetail(id, nama, harga){
    let data = {
      pId: id,
      pNama: nama,
      pHarga: harga
    }
    this.navCtrl.push(DetailPage, data);
  }

}
