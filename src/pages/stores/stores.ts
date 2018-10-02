import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";

/**
 * Generated class for the StoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stores",
  templateUrl: "stores.html"
})
export class StoresPage {
  constructor(
    public translate: TranslateService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    translate.setDefaultLang("en");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StoresPage");
  }
}
