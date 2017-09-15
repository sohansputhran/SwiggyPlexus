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
items:any=[];
qty:any;
constructor(public storage: Storage){
  }  
  
  setData(itemObject){
    this.itemDetails = JSON.stringify(itemObject);
    this.storage.set(this.item.Name,this.itemDetails);
  }

  CreateItemsArray(): any{
    var itemsArray =[];
      this.storage.forEach((v, k, i)=>{
        itemsArray.push(JSON.parse(v));
      })
      return itemsArray;
    }

    changeQuantity(item, shouldAdd){
      //find this item in the items array.
      for( var index=0;index<this.items.length;index++)
      this.items[index] ={item: item, quantity: this.qty};
    }

    Save(){
      this.items.forEach(item=>{
        this.storage.set(item.Name, JSON.stringify(item));
      })
    }
  

  

  // sendData(){
  //   return Promise.resolve(this.item);
  // }

  toCart(item){
    //this.item = item;
    //Firstfind if this item already exists on the items array.
    //If yes, then update the quantity
    //If no, then create this item and set quantity as 1.

    console.log("adding:",this.item);
    // items.push
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
