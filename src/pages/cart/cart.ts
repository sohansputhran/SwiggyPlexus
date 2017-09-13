import { Component } from '@angular/core';
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
  data: any = [];
  constructor(public navCtrl: NavController, public addCart: AddToCartProvider) {
    this.addCart.sendData().then(result => {
      this.data = result;
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    }
}
