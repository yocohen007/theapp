import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { ProductsPage } from "../pages/products/products";
import { StoresPage } from "../pages/stores/stores";
import { SettingsPage } from "../pages/settings/settings";
import { TranslateService } from "@ngx-translate/core";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(translateService: TranslateService, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    translateService.setDefaultLang("en");

    // let alertTitle: string ="";


    translateService.get(["TITLE_STORES", "TITLE_SETTINGS"]).subscribe(translations => {
      this.pages= [
        { title: "רשימת קניות", component: HomePage },
        { title: "מוצרים", component: ProductsPage },
        { title: translations.TITLE_STORES, component: StoresPage },
        { title: translations.TITLE_SETTINGS, component: SettingsPage },
      ];
    })










    // used for an example of ngFor and navigation
    // translateService.get("title.stores").subscribe(
    //   value => {
    //     // value is our translated string
    //     console.log("translated:" + value);
    //     alertTitle = value;
    //   }
    // )

    // this.pages = [
    //   { title: "רשימת קניות", component: HomePage },
    //   { title: "מוצרים", component: ProductsPage },
    //   { title: alertTitle, component: StoresPage },
    //   { title: "הגדרות", component: SettingsPage },
    // ];

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
