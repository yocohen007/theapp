import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, Platform } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "../../common/language-service";

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
  lang: string;

  constructor(
    public translate: TranslateService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public alertCtrl: AlertController,
    private langService: LanguageService
  ) {
    this.lang = langService.getCurrentLang();
    console.log("language is", this.lang);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
  }

  public onLangChange(event): void {
    this.langService.langChange(this.lang);
  }
}
