import { Component, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddToCartProvider } from "../../providers/add-to-cart/add-to-cart";
/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',

})
export class CartPage {
  items: any;
  totalItemprice: any = [];
  total: number = 0;
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public addCart: AddToCartProvider, public elem: ElementRef,public storage:Storage) {

  
   
  }

  ionViewDidEnter(){
    this.addCart.sendData().then(items =>{
      this.items = items;
      this.addCart.totalPrice().then(totalPrice =>{
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
      if( this.items[index].quantity>1){
      this.items[index].quantity -= 1;
      this.total = this.total - this.items[index].item.Price;
      }
    }

  }
  
  checkout(){
    this.storage.clear();
    let toast = this.toastCtrl.create({
      message: 'Checkout!',
      duration: 3000,
      position: 'middle',
      closeButtonText: 'Ok'
    });
    toast.present();

  }

  removeItem(itemKey){
      this.addCart.removeData(itemKey);
     }
    
}


    
    // totalAmnt(i){
    //     this.totalItemprice[i]=this.quantity[i] * 95;
    // }
    //

