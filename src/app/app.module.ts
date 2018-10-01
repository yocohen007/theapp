import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddToDbPage } from '../pages/add-to-db/add-to-db';
import { ModelService } from '../model/model-service';
import { ProductsPage } from '../pages/products/products';
import { AddToListPage } from '../pages/add-to-list/add-to-list';
import { ListItemPopoverPage } from '../pages/list-item-popover/list-item-popover';
import { IonicStorageModule } from '@ionic/storage';
import { StoresPage } from '../pages/stores/stores';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    StoresPage,
    AddToDbPage,
    AddToListPage,
    ListItemPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    StoresPage,
    AddToDbPage,
    AddToListPage,
    ListItemPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ModelService
  ]
})
export class AppModule {}
