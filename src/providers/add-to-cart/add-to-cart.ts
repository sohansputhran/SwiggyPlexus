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
  
  setData(restaurant){
    this.str = JSON.stringify(restaurant);
    this.storage.set(this.item.Name,this.str);
  }

  sendData(){
    return Promise.resolve(this.item);
  }

  toCart(item){
    this.item = item;
    
      console.log("adding:",this.item);
  }

  removeData(i){
    this.storage.remove(i);
  }

  getData(){
    this.storage.get('Taj Mahal').then((result) => {
      this.items = JSON.parse(result);
      console.log('items: ', this.items);
    });
   
    
  }
}
