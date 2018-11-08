import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IconChooserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-icon-chooser',
  templateUrl: 'icon-chooser.html',
})
export class IconChooserPage {
  public icons: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ["clipboard"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IconChooserPage');
  }

}
