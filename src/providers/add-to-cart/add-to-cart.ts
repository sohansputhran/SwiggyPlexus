import { Injectable } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";
import { ToastController } from 'ionic-angular';

@Injectable()
export class AddToCartProvider {
total = 0;
itemsArray: any = [];

constructor(public storage: Storage,public toastCtrl: ToastController){
  this.getItemsList().then(res =>{
<<<<<<< HEAD
    if(res!= null|| res!=undefined)
    this.itemsArray = res;
=======
    if(res != null || res != undefined)
      this.itemsArray = res;
>>>>>>> e2732759818ff1ce2731cc82c7af8ddc57f9d241
  });
}

getItemsList(): Promise<any>{
  return new Promise(resolve =>{
    this.storage.get("Items").then(res =>{
      resolve(res);
    });
  })
}

  //This function is called when the Add button is pressed in the Menu Page. 
  cartFunction(item, course, restaurant){
    var index = -1;
    for(var i = 0; i<this.itemsArray.length; i++){

      if(item.Name == this.itemsArray[i].Item.Name && course.Name == this.itemsArray[i].Course && restaurant.Name == this.itemsArray[i].Restaurant){
        index = i;
        break;
      }
    }

    if(index != -1){
      this.itemsArray[index].Quantity += 1;
    }else{
      index = this.itemsArray.length;
      let Meal = {Restaurant : restaurant.Name, Course : course.Name, Item: item, Quantity: 1};
      this.itemsArray.push(Meal);
    }

    this.storage.set("Items",this.itemsArray);                   //Uploading the items list to the local storage

    let toast = this.toastCtrl.create({                     //Displaying a toast message after adding the item to the cart
      message: item.Name + ' has been added to Cart!',
      duration: 100,
      position: 'middle',
      closeButtonText: 'Ok'
    });
    toast.present();
    console.log("Items Added:", this.itemsArray);
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
      this.getItemsList().then(res => {
        for (var i = 0; i < this.itemsArray.length; i++) {
          this.total += this.itemsArray[i].Item.Price * this.itemsArray[i].Quantity;
        }
        resolve(this.total);
      })
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
      this.storage.set("Items", item);
    });
  }
}

