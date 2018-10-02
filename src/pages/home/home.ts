import { Component } from "@angular/core";
import {
  NavController,
  ModalController,
  Modal,
  PopoverController
} from "ionic-angular";
import { AddToDbPage } from "../add-to-db/add-to-db";
import { ModelService } from "../../model/model-service";
import { AddToListPage } from "../add-to-list/add-to-list";
import { ListItemPopoverPage } from "../list-item-popover/list-item-popover";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public translate: TranslateService,
    public navCtrl: NavController,
    public modelService: ModelService,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController
  ) {
    translate.setDefaultLang("en");
  }

  navigateAddToDB(): void {
    this.navCtrl.push(AddToDbPage);
  }

  presentAddToListPageModal(): void {
    let profileModal: Modal = this.modalCtrl.create(AddToListPage, {
      userId: 8675309
    });
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.modelService.addToShoppingList(data.foo);
    });
    profileModal.present();
  }

  presentPopover(myEvent, itemName) {
    let popover = this.popoverCtrl.create(ListItemPopoverPage, {
      item: itemName
    });
    popover.present({
      ev: myEvent
    });
  }
}
