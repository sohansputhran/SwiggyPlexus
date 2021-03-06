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
retrievedItem: any;
itemsArray = [];

constructor(public storage: Storage,public toastCtrl: ToastController){
    this.getItemsList().then(res =>{
      this.itemsArray = res;
    });
  }
  
  getItemsList(): Promise<any>{
    var itemsList = [];
    return new Promise(resolve =>{
      this.storage.forEach((value, k, i)=>{

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

    let toast = this.toastCtrl.create({
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
    this.storage.set(itemObject.item.Name,this.itemDetails);
  }


  sendData(): Promise<any>{
    return new Promise(resolve =>{
      this.getItemsList().then(res =>{
        resolve(res);
      })
    })
  }
  
  removeData(itemKey){
    this.storage.remove(itemKey);
  }

  totalPrice(): Promise<number>{
    return new Promise(resolve =>{
      this.total = 0;
      this.getItemsList().then(res =>{
        for(var i = 0; i<this.itemsArray.length; i++){
          this.total += this.itemsArray[i].item.Price * this.itemsArray[i].quantity;
        }
        resolve(this.total);
      })
    })
  }

  checkout(){
    this.storage.clear();
    let toast = this.toastCtrl.create({
      message: 'Tasty dish is on its way!',
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
      this.storage.set(item.item.Name, JSON.stringify(item));
    });
  }
}

