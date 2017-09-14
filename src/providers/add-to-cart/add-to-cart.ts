import { Injectable } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";

@Injectable()
export class AddToCartProvider {

item: any;
itemDetails: string;
retrievedItem: any;

constructor(public storage: Storage){
  }  
  
  setData(itemObject){
    this.itemDetails = JSON.stringify(itemObject);
    this.storage.set(this.item.Name,this.itemDetails);
  }

  sendData(){
    return Promise.resolve(this.item);
  }

  toCart(item){
    this.item = item;
    console.log("adding:",this.item);
    this.setData(this.item);
  }

  removeData(itemKey){
    this.storage.remove(itemKey);
  }

  getData(itemKey){
    this.storage.get(itemKey).then((result) => {
      this.retrievedItem = JSON.parse(result);
      console.log('items: ', this.retrievedItem);
    });
  }
}
