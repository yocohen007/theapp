import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModelService } from '../../model/model-service';

/**
 * Generated class for the AddPriceCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-price-check',
  templateUrl: 'add-price-check.html',
})
export class AddPriceCheckPage {
  stores: any[] = [];
  store_id: number = 1;
  price: number = 0;

  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
    public modelService: ModelService,
    public navParams: NavParams) {
    this.stores = this.modelService.getStoresList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPriceCheckPage');
  }

  add(): void {
    let data = { store_id: this.store_id, price: this.price };
    this.viewCtrl.dismiss(data);
  }


}
