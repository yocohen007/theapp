import { Component } from "@angular/core";
import {
  NavController,
  ModalController,
  Modal,
  PopoverController,
  ToastController,
  Toast
} from "ionic-angular";
import { ModelService } from "../../model/model-service";
import { AddToListPage } from "../add-to-list/add-to-list";
import { ListItemPopoverPage } from "../list-item-popover/list-item-popover";
import { TranslateService } from "@ngx-translate/core";
import { ListItem } from "../../common/interfaces";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  stores: any[] = [];
  store: number = 0;
  private readonly STORE_STORAGE_KEY: string = "digitize.theapp.currentstore";

  constructor(
    public translate: TranslateService,
    public navCtrl: NavController,
    public modelService: ModelService,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    private toastCtrl: ToastController,
    private storage: Storage
  ) {
    this.stores = this.modelService.getStoresList();
    this.stores.splice(0, 0, { "id": 0, "name": "סתם" });
    this.storage.get(this.STORE_STORAGE_KEY).then(val => {
      if (val != null) {
        this.store = val;
      }
    });
  }

  presentAddToListPageModal(): void {
    let addToListModal: Modal = this.modalCtrl.create(AddToListPage, {
      userId: 8675309
    });
    addToListModal.onDidDismiss(data => {
      console.log(data);
      if (data == null) {
        return;
      }
      let newItem: string = data.itemName;
      if (newItem != null) {
        this.modelService.addToShoppingList(newItem);
        const toast: Toast = this.toastCtrl.create({
          message: newItem + " was added to the list",
          duration: 3000
        });
        toast.present();
      }
    });
    addToListModal.present();
  }

  presentPopover(myEvent, listItem: ListItem) {
    console.log("popover");
    let popover = this.popoverCtrl.create(ListItemPopoverPage, {
      item: listItem,
      store: this.store
    });
    popover.present({
      ev: myEvent
    });
  }

  itemTapped(myEvent, listItem: ListItem) {
    console.log("mark " + listItem.product_id);
    this.modelService.markShoppingListItem(listItem);
  }

  onChangeStore(event): void {
    this.storage.set(this.STORE_STORAGE_KEY, this.store);
  }
}
