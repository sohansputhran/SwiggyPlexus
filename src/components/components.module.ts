import { NgModule } from '@angular/core';
import { AccordianComponent } from './accordian/accordian';
import { BasiccardComponent } from './basiccard/basiccard';

@NgModule({
	declarations: [AccordianComponent,
    BasiccardComponent,
    ],
    
    imports: [],
    
    exports: [AccordianComponent,
    BasiccardComponent,
   ]
})
export class ComponentsModule {}
