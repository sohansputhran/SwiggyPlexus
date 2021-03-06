import { Component, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddToCartProvider } from "../../providers/add-to-cart/add-to-cart";

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',

})
export class CartPage {
  items: any;
  totalItemprice: any = [];
  total: number = 0;
  isSaveDisable: boolean = true;
  isCheckoutDisable: boolean = true;
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public addCart: AddToCartProvider, public elem: ElementRef, public storage: Storage) {

  }

  ionViewDidEnter() {
    this.addCart.sendData().then(items => {
      this.items = items;
      this.addCart.totalPrice().then(totalPrice => {
        this.total = totalPrice;
        if(this.total > 0){
          this.isCheckoutDisable = false;
        }
      })
    })
  }

  changeQuantity(index, changeStatus) {
    this.isSaveDisable = false;
    if (changeStatus) {
      this.items[index].quantity += 1;
      this.total = this.total + this.items[index].item.Price;

    }
    else {
      if (this.items[index].quantity > 1) {
        this.items[index].quantity -= 1;
        this.total = this.total - this.items[index].item.Price;
      }
    }

    if(this.total == 0){
      this.isCheckoutDisable = true;
    }
  }

  checkoutFunction() {
    this.addCart.checkout();
    this.isCheckoutDisable = true;
    this.items = [];
    this.total = 0;
  }

  removeItem(item) {
    this.addCart.removeData(item.Name);
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].item.Name == item.Name){
        this.total = this.total - this.items[i].item.Price * this.items[i].quantity;
        this.items.splice(i,1);
        break;
      }
    }
  }

  saveFunction() {
    this.isSaveDisable = true;
    // for (let i = 0; i < this.items.length; i++) {
    //   this.addCart.setData(this.items[i]);
    // }
    console.log("Save: ", this.items);
    this.addCart.save(this.items);
  }

}

