import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainCoursePage } from './main-course';

@NgModule({
  declarations: [
    MainCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(MainCoursePage),
  ],
})
export class MainCoursePageModule {}
