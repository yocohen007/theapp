import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModelService } from '../../model/model-service';

/**
 * Generated class for the ListItemPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-item-popover',
  templateUrl: 'list-item-popover.html',
})
export class ListItemPopoverPage {
  public itemName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modelService: ModelService) {
    this.itemName = navParams.get("item");
    console.log(this.itemName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListItemPopoverPage');
  }

  delete(): void {
    console.log("delete " + this.itemName);
    this.modelService.deleteFromShoppingList(this.itemName);
    this.viewCtrl.dismiss();
  }

  mark(): void {
    console.log("delete " + this.itemName);
    this.modelService.markShoppingList(this.itemName);
    this.viewCtrl.dismiss();
  }
}
