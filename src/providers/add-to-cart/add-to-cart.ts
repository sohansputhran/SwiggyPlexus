import { Injectable } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ItemgridComponent } from "../../components/itemgrid/itemgrid";
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

  toCart(item){
    console.log(item);
    this.item = item;
    this.setData(item);
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
