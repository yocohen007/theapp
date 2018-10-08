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
import { ListItem } from "../../common/interfaces";

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
      let newItem = data.itemName;
      if (newItem != null) {
        this.modelService.addToShoppingList(newItem);
      }
    });
    profileModal.present();
  }

  presentPopover(myEvent, listItem: ListItem) {
    let popover = this.popoverCtrl.create(ListItemPopoverPage, {
      item: listItem
    });
    popover.present({
      ev: myEvent
    });
  }
}
