import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,ModalController } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RestaurantPage } from "../pages/restaurant/restaurant";
import {DessertPage} from '../pages/dessert/dessert';
import {MainCoursePage} from '../pages/main-course/main-course';
import {StarterPage} from '../pages/starter/starter';
import { ItemDetailPage} from './modals/itemdetail/itemdetail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
     AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RestaurantPage,
    DessertPage,
    MainCoursePage,
    StarterPage,
    ItemDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RestaurantPage,
    DessertPage,
    MainCoursePage,
    StarterPage,
    ItemDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
