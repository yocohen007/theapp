import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-store',
  templateUrl: 'add-store.html',
})
export class AddStorePage {
  public store: string = "";

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStorePage');
  }

  dismiss(): void {
    let data = { "itemName": this.store };
    this.viewCtrl.dismiss(data);
  }

  cancel(): void {
    let data = { "itemName": null };
    this.viewCtrl.dismiss(data);
  }
}
