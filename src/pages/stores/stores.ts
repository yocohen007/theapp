import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { ModelService } from "../../model/model-service";

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
    public navParams: NavParams,
    public modelService: ModelService
  ) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StoresPage");
  }
}
