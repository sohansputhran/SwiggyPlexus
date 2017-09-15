import { Component } from '@angular/core';
import { ModalController } from "ionic-angular";
//import { AddToCartProvider } from "../../providers/add-to-cart/add-to-cart";
/**
 * Generated class for the ItemgridComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'itemgrid',
  templateUrl: 'itemgrid.html'
})
export class ItemgridComponent {

  item: any;

  constructor() {
    this.item =[{name: "AAAAA", num: "35"},
                {name: "BBBBB", num: "45"},
                {name: "CCCCC", num: "55"},
                {name: "DDDDD", num: "65"}
              ];
  }

 // addToCart(){
   //   this.add.toCart(this.item);
  //}
}
