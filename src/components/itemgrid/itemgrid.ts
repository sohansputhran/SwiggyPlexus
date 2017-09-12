import { Component } from '@angular/core';
import {AddToCartProvider} from '../../providers/add-to-cart/add-to-cart';
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

 item:any;

  constructor(public add:AddToCartProvider) {
   this.item=[{name:"shyam",city:"bhopal"},{name:"hello",city:"world"},{name:"hello",city:"bye"}];
  }
  addtoCart(){
    this.add.toCart(this.item);

   
  }
remove(item){

}

}
