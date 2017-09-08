import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
  
  constructor(public navCtrl: NavController) {
    this.items = [{name: "Empire", location: "Tamil Nadu", rating: "4.5",image:"assets/images/empire.jpg"},
                  {name:"Green Leaf", location: "Karnataka", rating:"1",image:"assets/images/green_leaf.png"},
                  {name:"AAAAA",location:"Kerala", rating: "2",image:"assets/images/empire.jpg"},
                  
                ]
      
  }

}
