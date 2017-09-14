import { NgModule } from '@angular/core';
import { AccordianComponent } from './accordian/accordian';
import { ItemgridComponent } from './itemgrid/itemgrid';
import { BasiccardComponent } from './basiccard/basiccard';
import { ImagecardComponent } from './imagecard/imagecard';
@NgModule({
	declarations: [AccordianComponent,
    ItemgridComponent,
    BasiccardComponent,
    ImagecardComponent],
    
    imports: [],
    
    exports: [AccordianComponent,
    ItemgridComponent,
    BasiccardComponent,
    ImagecardComponent]
})
export class ComponentsModule {}
