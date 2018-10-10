import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Modal, ModalController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { ModelService } from "../../model/model-service";
import { AddStorePage } from "../add-store/add-store";

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
    public modalCtrl: ModalController,
    public modelService: ModelService
  ) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StoresPage");
  }

  presentAddStorePageModal(): void {
    let addStoreModal: Modal = this.modalCtrl.create(AddStorePage, {
      userId: 8675309
    });
    addStoreModal.onDidDismiss(data => {
      console.log(data);
      let newItem = data.itemName;
      if (newItem != null) {
        this.modelService.addStore(newItem);
      }
    });
    addStoreModal.present();
  }
}
