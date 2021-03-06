import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddToDbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-to-db',
  templateUrl: 'add-to-db.html',
})
export class AddToDbPage {
  public product: string = "";

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddToDbPage');
  }

  dismiss(): void {
    let data = { "itemName": this.product };
    this.viewCtrl.dismiss(data);
  }

  cancel(): void {
    let data = { "itemName": null };
    this.viewCtrl.dismiss(data);
  }
}
