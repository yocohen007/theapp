import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
// import { Database, Product, ListItem, Store } from "../common/interfaces";
// import { StoreOrder } from "../common/store-order";
import { TranslateService } from "@ngx-translate/core";
import { Platform, AlertController } from "ionic-angular";

@Injectable()
export class LanguageService {
    private lang: string;
    private readonly LANGUAGE_STORAGE_KEY: string = "digitize.theapp.lang";

    constructor(private storage: Storage,
        public platform: Platform,
        private translateService: TranslateService,
        public alertCtrl: AlertController
    ) {
        console.log("constructor model-service");
    }

    public setLanguage(callback, app): void {
        this.storage.get(this.LANGUAGE_STORAGE_KEY).then(val => {
            this.lang = val != null ? val : "heb";
            this.translateService.setDefaultLang(this.lang);
            console.log("language is", this.lang);
            if (this.lang == "heb") {
                this.platform.setDir('rtl', true);
            } else {
                this.platform.setDir('ltr', true);
            }
            this.translateService.use(this.lang);
            callback(app);
        });
    }

    public langChange(lang: string): void {
        this.lang = lang;
        let alert = this.alertCtrl.create({
            subTitle: 'Some changes may take affect only after app restart.',
            buttons: ['Ok']
        });

        alert.present();
        this.storage.set(this.LANGUAGE_STORAGE_KEY, this.lang);
        if (this.lang == "heb") {
            this.platform.setDir('rtl', true);
        } else {
            this.platform.setDir('ltr', true);
        }
        this.translateService.use(this.lang);
    }

    public getCurrentLang(): string {
        return this.lang;
    }
}