import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {AccordianComponent} from '../../components/accordian/accordian';
import {ItemgridComponent} from '../../components/itemgrid/itemgrid';
import {BasiccardComponent} from '../../components/basiccard/basiccard';
import {ImagecardComponent} from '../../components/imagecard/imagecard';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  restaurant : any;
  mealType : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public mdlCtrl:ModalController) {
      this.restaurant = this.navParams.get('restaurant');
      this.mealType = this.navParams.get('mealType');
  }
}
