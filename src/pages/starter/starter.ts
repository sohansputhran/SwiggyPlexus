import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {ItemDetailPage} from '../../app/modals/itemdetail/itemdetail';
import {AccordianComponent} from '../../components/accordian/accordian';
import {ItemheaderComponent} from '../../components/itemheader/itemheader';
import {ItemgridComponent} from '../../components/itemgrid/itemgrid';
import {BasiccardComponent} from '../../components/basiccard/basiccard';
import {ImagecardComponent} from '../../components/imagecard/imagecard';
/**
/**
 * Generated class for the StarterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starter',
  templateUrl: 'starter.html',
})
export class StarterPage {
  price:any;
  ratings:any;
  foodItemName:any;
  image :any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public mdlCtrl:ModalController) {
    this.price='95';
    this.ratings='3.5';
    this.foodItemName="poha";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarterPage');
  }
modalPage(){
  console.log("çalled");
  let modal=this.mdlCtrl.create(ItemDetailPage,{
    foodItemName:this.foodItemName,image:"assets/img/starter.png"
  });
  modal.present();
}
}
