import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,ModalController, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { CartPage } from '../pages/cart/cart';
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
import { AddToCartProvider } from '../providers/add-to-cart/add-to-cart';
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
     CartPage,
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
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     CartPage,
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
    Storage,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AddToCartProvider
  ]
})
export class AppModule {}
