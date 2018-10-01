import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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
  public itemName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.itemName = navParams.get("ev");
    console.log(this.itemName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListItemPopoverPage');
  }

  delete() {
    console.log("delete " + this.itemName);
    this.viewCtrl.dismiss();
  }
}
