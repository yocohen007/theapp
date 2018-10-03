import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { ProductsPage } from "../pages/products/products";
import { StoresPage } from "../pages/stores/stores";
import { SettingsPage } from "../pages/settings/settings";
import { TranslateService } from "@ngx-translate/core";
import { Storage } from "@ionic/storage";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string; component: any }>;
  private readonly LANGUAGE_STORAGE_KEY: string = "digitize.theapp.lang";

  constructor(
    translateService: TranslateService,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage
  ) {
    this.initializeApp();
    this.storage.get(this.LANGUAGE_STORAGE_KEY).then(val => {
      if (val != null) {
        translateService.setDefaultLang(val);
      } else {
        translateService.setDefaultLang("heb");
      }
      console.log("language is", val != null ? val : "heb");

      translateService
      .get([
        "TITLE_SHOPPING_LIST",
        "TITLE_STORES",
        "TITLE_SETTINGS",
        "TITLE_PRODUCTS"
      ])
      .subscribe(translations => {
        this.pages = [
          { title: translations.TITLE_SHOPPING_LIST, component: HomePage },
          { title: translations.TITLE_PRODUCTS, component: ProductsPage },
          { title: translations.TITLE_STORES, component: StoresPage },
          { title: translations.TITLE_SETTINGS, component: SettingsPage }
        ];
      });
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn"t want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
