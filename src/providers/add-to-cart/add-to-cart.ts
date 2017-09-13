import { Injectable } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";

@Injectable()
export class AddToCartProvider {

item: any;
str: string;
items: any;

constructor(public storage: Storage){
    

  }  
  
  setData(item){
    this.str = JSON.stringify(item);
    this.storage.set(item.name,this.str);
  }

  sendData(){
    return Promise.resolve(this.item);
  }

  toCart(item){
    console.log(item);
    this.item = item;
    for(var i = 0; i < item.length;i++){
      this.setData(item[i]);
    }
    this.getData();
  }

  removeData(){
    this.storage.remove('BBBBB');
  }

  getData(){
    this.storage.get('AAAAA').then((result) => {
      this.items = JSON.parse(result);
      console.log('items: ', this.items);
    });
   
    
  }
}
