import { Injectable } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";

@Injectable()
export class AddToCartProvider {
total : number=0;
item: any;
itemDetails: string;
retrievedItem: any;
items:any=[];
qty:any;
itemsArray =[];


constructor(public storage: Storage){
    this.getItemsList().then(res => {
      this.itemsArray = res;
    });
  }

  getItemsList(): Promise<any>{
    var itemsList = [];
    return new Promise(resolve => {
      this.storage.forEach((value,key,i) => {
        itemsList.push(JSON.parse(value));
      }).then(val =>{
        resolve(itemsList);
      });
    })
  }

  // Execution starts from here.
  toCart(item, shouldSetNow = true){
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

  sendData(): any{
    return this.itemsArray;
  }
  
  removeData(itemKey){
    this.storage.remove(itemKey);
  }
  
  totalPrice(){
    console.log('this.itemsArray: ', this.itemsArray);
  
    for(var i = 0; i<this.itemsArray.length; i++){
      console.log(this.itemsArray[i].item.Price);
      this.total += this.itemsArray[i].item.Price * this.itemsArray[i].quantity;
    }
    return this.total;
  }
  
  save(){
    this.items.forEach(item=>{
      this.storage.set(item.item.Name, JSON.stringify(item));
    });
  }
}
