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
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public addCart: AddToCartProvider, public elem: ElementRef, public storage: Storage) {

  }

  ionViewDidEnter() {
    this.addCart.sendData().then(items => {
      this.items = items;
      this.addCart.totalPrice().then(totalPrice => {
        this.total = totalPrice;
      })
    })
  }

  changeQuantity(index, changeStatus) {
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

  }

  checkout() {
    this.storage.clear();
    let toast = this.toastCtrl.create({
      message: 'Checkout!',
      duration: 3000,
      position: 'middle',
      closeButtonText: 'Ok'
    });
    toast.present();
    this.total = 0;
    this.items = [];
  }

  removeItem(item) {
    this.addCart.removeData(item.Name);
    this.ionViewDidEnter();
  }

  save() {
    for (let i = 0; i < this.items.length; i++) {
      this.addCart.setData(this.items[i]);
    }

  }

}

