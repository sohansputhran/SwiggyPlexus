import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AddToCartProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AddToCartProvider {

  constructor(public http: Http,private storage: Storage) {
    
  }

  getdata(item){
    this.storage.get(item).then((result)=>{
   JSON.parse(result);
    });
    this.remove(item);
   }
toCart(item){
  console.log(item);
  var abc=JSON.stringify(item);
this.storage.set('amrty', abc);
  this.getdata('hell');
}
remove(item){
  this.storage.remove(item);
  console.log("deleted");
}
}
