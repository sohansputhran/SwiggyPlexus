import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
/**
 * Generated class for the AccordianComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordian',
  templateUrl: 'accordian.html'
})
export class AccordianComponent {

  information: any[];

  constructor(public navCtrl: NavController, private http: Http) {
    let localData = http.get('assets/accordiandata/accordiandata.json').map(res => res.json().items);
    localData.subscribe(data => {
      
      this.information = data;
      console.log('this.information: ', this.information);
    })
    
  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
 


}
