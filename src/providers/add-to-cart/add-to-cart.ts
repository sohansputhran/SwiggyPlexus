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
itemsArray =[];
constructor(public storage: Storage){
    this.storage.forEach((value, k, i)=>{
      this.itemsArray.push(JSON.parse(value));
    });
  }
  
  // Execution starts from here.
  toCart(item, shouldSetNow = true){
    //Firstfind if this item already exists on the items array.
    //If yes, then update the quantity
    //If no, then create this item and set quantity as 1.
    var index = -1;
    for(var i = 0; i<this.itemsArray.length; i++){
      if(item.Name == this.itemsArray[i].item.Name){
        index = i;
        break;
      }
    }

    if(index != -1){
      this.itemsArray[index].quantity += 1;
    }else{
      index = this.itemsArray.length;
      this.itemsArray.push({item: item, quantity: 1});
    }

    if(shouldSetNow){
      this.setData(this.itemsArray[index]);
    }
  }

  setData(itemObject){
    console.log('itemObject: ', itemObject);
    this.itemDetails = JSON.stringify(itemObject);
    this.storage.set(itemObject.item.Name,this.itemDetails);
  }

  sendData(){
    return Promise.resolve(this.itemsArray);
  }

  removeData(itemKey){
    this.storage.remove(itemKey);
  }

  save(){
    this.items.forEach(item=>{
      this.storage.set(item.item.Name, JSON.stringify(item));
    });
  }
}
