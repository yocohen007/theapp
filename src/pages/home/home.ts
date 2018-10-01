import { Component } from '@angular/core';
import { NavController, ModalController, Modal, PopoverController } from 'ionic-angular';
import { AddToDbPage } from '../add-to-db/add-to-db';
import { ModelService } from '../../model/model-service';
import { AddToListPage } from '../add-to-list/add-to-list';
import { ListItemPopoverPage } from '../list-item-popover/list-item-popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modelService: ModelService, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {
  }

  navigateAddToDB(): void {
    this.navCtrl.push(AddToDbPage)
  }

  presentAddToListPageModal(): void {
    let profileModal: Modal = this.modalCtrl.create(AddToListPage, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.modelService.addToShoppingList(data.foo);
    });
    profileModal.present();
  }

  presentPopover(myEvent, itemName) {
    let popover = this.popoverCtrl.create(ListItemPopoverPage, {ev:itemName});
    popover.present({
      ev: myEvent
    });
  }
}
