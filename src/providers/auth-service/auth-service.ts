import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

// let api = 'http://timoer.info/api-pasar/';
let api = 'https://www.rinjani.id/api/pasar/';
@Injectable()
export class AuthService {

  constructor(public http: Http) {}

  postData(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(api + type, JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        // resolve(res.json()); //Phalcon
        resolve(res); //PHP Slim
      }, (err) => {
        reject(err);
      });
    });
  }

  getProduks() {
    return new Promise(resolve => {
      this.http.get(api+'produks').subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getProduksByTanggal(tanggal){
    return new Promise(resolve => {
      this.http.get(api+'produks/'+tanggal).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getPasars() {
    return new Promise(resolve => {
      this.http.get(api+'pasars').subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }
}