import { Component,ElementRef } from '@angular/core';
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
  items = [];
  totalPrice = 0;
  itemTotal: any;

  constructor(public navCtrl: NavController, public addCart: AddToCartProvider,public elem:ElementRef) {
    this.totalPrice = this.addCart.totalPriceValue();
    console.log('res: ', this.totalPrice);
    this.addCart.sendData().then(result => {
      this.items = result;
      console.log("Inside cart :",this.items);
      });      
  } 

changeQuantity(index,changeStatus){
    if(changeStatus){
        this.items[index].quantity+=1;
        this.totalPrice = this.totalPrice + this.items[index].item.Price;
    }
    else{
      this.items[index].quantity-=1;
      this.totalPrice = this.totalPrice - this.items[index].item.Price;
    }
  }
}