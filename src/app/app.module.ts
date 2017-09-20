import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,ModalController, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { CartPage } from '../pages/cart/cart';
import { LoginPage } from '../pages/login/login';
import {  SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RestaurantPage } from "../pages/restaurant/restaurant";
import { ApiService } from "../providers/api-service";

import {MenuPage} from '../pages/menu/menu';

//Components
import {AccordianComponent} from '../components/accordian/accordian';
import {BasiccardComponent} from '../components/basiccard/basiccard';


//modals
import{ItemDetailModal} from '../modals/itemdetail/itemdetail'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddToCartProvider } from '../providers/add-to-cart/add-to-cart';
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    LoginPage,
    SignupPage,
    HomePage,
    TabsPage,
    AccordianComponent,
    RestaurantPage,
    BasiccardComponent,
    MenuPage,
    ItemDetailModal
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
    LoginPage,
    SignupPage,
    HomePage,
    TabsPage,
    AccordianComponent,
    RestaurantPage,
    BasiccardComponent,
    MenuPage,
    ItemDetailModal
  ],
  providers: [
    StatusBar,
    Storage,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AddToCartProvider,
    ApiService
  ]
})
export class AppModule {}
