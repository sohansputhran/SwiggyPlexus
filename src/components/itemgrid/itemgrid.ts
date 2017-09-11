import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello ItemgridComponent Component');
    this.text = 'Hello World';
  }

}
