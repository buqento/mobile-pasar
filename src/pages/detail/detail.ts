import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  id: any;
  nama: any;
  harga: any;
  responseData: any;
  userData = {
    'id':'',
    'harga':''
  }

  constructor(public navCtrl: NavController, 
    public authService: AuthService,
    public navParams: NavParams) {
      this.id = navParams.get('pId');
      this.nama = navParams.get('pNama');
      this.harga = navParams.get('pHarga');

      this.userData.id = this.id;
      this.userData.harga = this.harga;
  }

  ionViewDidLoad() {
    console.log(this.id + this.harga);
  }

  update(){
    if(this.userData.harga){
      this.authService.postData(this.userData, 'update-produk').then(() =>{
        this.navCtrl.push(HomePage);
      })
    }
    
  }
}
