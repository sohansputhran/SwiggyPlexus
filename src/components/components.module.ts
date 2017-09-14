import { NgModule } from '@angular/core';
import { AccordianComponent } from './accordian/accordian';
import { BasiccardComponent } from './basiccard/basiccard';
import { ImagecardComponent } from './imagecard/imagecard';
@NgModule({
	declarations: [AccordianComponent,
    BasiccardComponent,
    ImagecardComponent],
    
    imports: [],
    
    exports: [AccordianComponent,
    BasiccardComponent,
    ImagecardComponent]
})
export class ComponentsModule {}
