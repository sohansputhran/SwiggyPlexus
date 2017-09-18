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
totalPrice = 0;

constructor(public storage: Storage){
    this.storage.forEach((value, k, i)=>{
      this.itemsArray.push(JSON.parse(value));
    });
  }

  calculateTotalPrice(index,quantityStatus){
    if(quantityStatus){
       this.totalPrice = this.totalPrice + this.itemsArray[index].item.Price;  
    }
    else{
        this.totalPrice = this.totalPrice - this.itemsArray[index].item.Price;
     }
  }

  totalPriceValue(){
    return this.totalPrice;
  }
  
  // Execution starts from here.
  toCart(item, shouldSetNow = true){
    //Firstfind if this item already exists on the items array.
    //If yes, then update the quantity
    //If no, then create this item and set quantity as 1.
    for(var i = 0; i<this.itemsArray.length; i++){
      console.log("Loop: ",this.totalPrice);
      this.totalPrice = this.totalPrice + this.itemsArray[i].item.Price;
    }
    var index = -1;
    for(var i = 0; i<this.itemsArray.length; i++){

      if(item.Name == this.itemsArray[i].item.Name){
        index = i;
        break;
      }
    }

    if(index != -1){
      this.itemsArray[index].quantity += 1;
      this.calculateTotalPrice(index,true);
    }else{
      index = this.itemsArray.length;
      this.itemsArray.push({item: item, quantity: 1});
      this.calculateTotalPrice(index,true);
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
   // this.cartPage.cartPrice(this.sendTotalPrice());
    return Promise.resolve(this.itemsArray);
  }

  // sendTotalPrice(){
  //   for(var index=0; index < this.items.length; index++){
  //     console.log("Loop Price: ", this.totalPrice);
  //     this.totalPrice = this.totalPrice + this.items[index].item.Price * this.items[index].quantity;
  //   }
  //   console.log("Price: ", this.totalPrice);
  //   return this.totalPrice; 
  // }

  removeData(itemKey){
    this.storage.remove(itemKey);
  }

  save(){
    this.items.forEach(item=>{
      this.storage.set(item.item.Name, JSON.stringify(item));
    });
  }
}
