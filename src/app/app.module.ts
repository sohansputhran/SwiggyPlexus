import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,ModalController } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RestaurantPage } from "../pages/restaurant/restaurant";

import {StarterPage} from '../pages/starter/starter';
import { ItemDetailPage} from './modals/itemdetail/itemdetail';
//Components
import {AccordianComponent} from '../components/accordian/accordian';
import {ItemheaderComponent} from '../components/itemheader/itemheader';
import {ItemgridComponent} from '../components/itemgrid/itemgrid';
import {BasiccardComponent} from '../components/basiccard/basiccard';
import {ImagecardComponent} from '../components/imagecard/imagecard';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
     AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccordianComponent,
    RestaurantPage,
    ItemheaderComponent,
    ItemgridComponent,
    BasiccardComponent,
    ImagecardComponent,
    StarterPage,
    ItemDetailPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccordianComponent,
    RestaurantPage,
    ItemheaderComponent,
    ItemgridComponent,
    BasiccardComponent,
    ImagecardComponent,
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
