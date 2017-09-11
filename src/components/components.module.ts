import { NgModule } from '@angular/core';
import { AccordianComponent } from './accordian/accordian';
import { ItemheaderComponent } from './itemheader/itemheader';
import { ItemgridComponent } from './itemgrid/itemgrid';
import { BasiccardComponent } from './basiccard/basiccard';
import { ImagecardComponent } from './imagecard/imagecard';
@NgModule({
	declarations: [AccordianComponent,
    ItemheaderComponent,
    ItemgridComponent,
    BasiccardComponent,
    ImagecardComponent],
	imports: [],
	exports: [AccordianComponent,
    ItemheaderComponent,
    ItemgridComponent,
    BasiccardComponent,
    ImagecardComponent]
})
export class ComponentsModule {}
