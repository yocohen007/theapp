import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AddToDbPage } from "../pages/add-to-db/add-to-db";
import { ModelService } from "../model/model-service";
import { ProductsPage } from "../pages/products/products";
import { AddToListPage } from "../pages/add-to-list/add-to-list";
import { ListItemPopoverPage } from "../pages/list-item-popover/list-item-popover";
import { IonicStorageModule } from "@ionic/storage";
import { StoresPage } from "../pages/stores/stores";
import { SettingsPage } from "../pages/settings/settings";
import { TranslateModule, TranslateLoader} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpModule } from "@angular/http";
import { HttpClient, HttpClientModule  } from "@angular/common/http";
import { AddStorePage } from "../pages/add-store/add-store";
import { LanguageService } from "../common/language-service";
import { ProductPage } from "../pages/product/product";
import { AddPriceCheckPage } from "../pages/add-price-check/add-price-check";
import { IconChooserPage } from "../pages/icon-chooser/icon-chooser";

export function createTranslateLoader(http: HttpClient) {
  console.log("createTranslateLoader1");
  console.log(http);
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductPage,
    StoresPage,
    SettingsPage,
    AddToDbPage,
    AddPriceCheckPage,
    AddToListPage,
    AddStorePage,
    ListItemPopoverPage,
    IconChooserPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductPage,
    StoresPage,
    SettingsPage,
    AddToDbPage,
    AddPriceCheckPage,
    AddToListPage,
    AddStorePage,
    ListItemPopoverPage,
    IconChooserPage
  ],
  providers: [
    LanguageService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ModelService,
  ]
})
export class AppModule {}
