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
itemsArray = [];
constructor(public storage: Storage){
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
      //this.total=this.itemsArray[index].item.Price *this.itemsArray[index].quantity;
    }else{
      index = this.itemsArray.length;
      this.itemsArray.push({item: item, quantity: 1});
      //this.total=this.itemsArray[index].item.Price *this.itemsArray[index].quantity;
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


  }





  // save(){
  //   this.items.forEach(item=>{
  //     this.storage.set(item.Name,);
  //     console.log(" item name :+" +item.Name +" save in provder",itemQty);
  //   });
  // }
  // getData(itemKey){
  //   this.storage.get(itemKey).then((result) => {
  //     this.retrievedItem = JSON.parse(result);
  //     console.log('items: ', this.retrievedItem);
  //   });
  // }
  
  // CreateItemsArray(): any{   

  //     return this.itemsArray;
  //   }

  //   changeQuantity(item, shouldAdd){
  //     //find this item in the items array.
  //     if(shouldAdd)
  //     for( var index=0;index<this.itemsArray.length;index++){
  //       this.items[index] ={item: item, quantity: this.qty};
  //   }
  // }

    



