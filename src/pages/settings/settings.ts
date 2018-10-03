import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { TranslateService } from "@ngx-translate/core";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  lang: string = "heb";
  private readonly LANGUAGE_STORAGE_KEY: string = "digitize.theapp.lang";

  constructor(
    public translate: TranslateService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
    this.storage.get(this.LANGUAGE_STORAGE_KEY).then(val => {
      if (val != null) {
        this.lang = val;
      }
      console.log("language is", this.lang);
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
  }

  public onLangChange(event): void {
    console.log("lang="+this.lang);
    this.storage.set(this.LANGUAGE_STORAGE_KEY, this.lang);
    this.translate.use(this.lang);
  }
}
