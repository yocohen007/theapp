import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddToDbPage } from '../add-to-db/add-to-db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dbItems: dbItem[];
  list: dbItem[];

  constructor(public navCtrl: NavController) {
    this.dbItems = [{
      name: "עגבניות",
    },{
      name: "מלפפונים",
    }];
    this.list = [{
      name: "עגבניות",
    },{
      name: "מלפפונים",
    }];

  }

  navigateAddToDB(): void {
    this.navCtrl.push(AddToDbPage)
  }

}
