import { NgModule } from '@angular/core';
import { AccordianComponent } from './accordian/accordian';
import { BasiccardComponent } from './basiccard/basiccard';
// import { ShowHideInput } from './show-hide-password/show-hide-input';
// import { ShowHideContainer } from './show-hide-password/show-hide-container';
@NgModule({
	declarations: [AccordianComponent,
	//      ShowHideContainer,
	//   ShowHideInput,
    BasiccardComponent,
    ],
    
    imports: [],
    
    exports: [AccordianComponent,
	//  ShowHideContainer,
    //   ShowHideInput,
    BasiccardComponent,
   ]
})
export class ComponentsModule {}
