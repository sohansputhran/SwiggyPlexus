import { Injectable } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";
import { ToastController } from 'ionic-angular';

@Injectable()
export class AddToCartProvider {
total = 0;
itemDetails: string;
retrievedList: any;
itemsArray = [];

constructor(public storage: Storage,public toastCtrl: ToastController){
    this.itemsArray = this.getItemsList();
  }
  
  getItemsList(){
    this.storage.get("Items").then(items => {
      this.retrievedList = items;
      console.log("RL:", this.retrievedList);
      });
      return this.retrievedList;
  }
  
  //This function is called when the Add button is pressed in the Menu Page. 
  cartFunction(item, course, restaurant){
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
      this.itemsArray.push({Restaurant : restaurant.Name, Course : course.Name, Item: item, Quantity: 1});
    }

    this.setData(this.itemsArray[index]);                   //Uploading the items list to the local storage

    let toast = this.toastCtrl.create({                     //Displaying a toast message after adding the item to the cart
      message: item.Name + ' has been added to Cart!',
      duration: 100,
      position: 'middle',
      closeButtonText: 'Ok'
    });
    toast.present();

  }

  setData(itemObject){
    console.log('itemObject: ', itemObject);
    this.itemDetails = JSON.stringify(itemObject);
    this.storage.set("Items",this.itemDetails);
  }


  sendData(): Promise<any>{
    return new Promise(resolve =>{
      this.getItemsList()
    });
  }
  
  removeData(itemKey){
    this.storage.remove(itemKey);
  }

  totalPrice(): Promise<number>{
    return new Promise(resolve =>{
      this.total = 0;
      this.itemsArray = this.getItemsList();
      for(var i = 0; i<this.itemsArray.length; i++){
        this.total += this.itemsArray[i].Item.Price * this.itemsArray[i].Quantity;
      }
        resolve(this.total);
      })
  }

  checkout(){
    this.storage.clear();
    let toast = this.toastCtrl.create({
      message: 'Your Order has been placed.',
      duration: 2000,
      position: 'middle',
      closeButtonText: 'Ok'
    });
    toast.present();
    this.itemsArray = [];
    this.total = 0;
  }

  save(items){
    this.itemsArray = items;
    this.itemsArray.forEach(item=>{
      this.storage.set("Items", JSON.stringify(item));
    });
  }
}

