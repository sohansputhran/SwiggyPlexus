import { Component } from '@angular/core';

/**
 * Generated class for the BasiccardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'basiccard',
  templateUrl: 'basiccard.html'
})
export class BasiccardComponent {

  text: string;

  constructor() {
    console.log('Hello BasiccardComponent Component');
    this.text = 'Hello World';
  }

}
