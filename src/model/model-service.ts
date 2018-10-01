import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";

@Injectable()
export class ModelService {
  private products: product[];
  private shoppingList: listItem[];
  private readonly SHOPPING_LIST_STORAGE_KEY: string = "digitize.theapp.shoppingList";

  constructor(private storage: Storage) {
    console.log("constructor model-service");
  }

  getProductList(): product[] {
    if (this.products == null) {
      this.prepareData();
    }
    return this.products;
  }

  getShoppingList(): listItem[] {
    if (this.shoppingList == null) {
      this.prepareData();
    }
    return this.shoppingList;
  }

  addToShoppingList(product: string) {
    this.shoppingList.push({ product: { name: product } });
    this.storage.set(this.SHOPPING_LIST_STORAGE_KEY, this.shoppingList);
  }

  markShoppingList(product: string): void {
    var index: number = this.getIndexInShoppongList(product);
    if (index > -1) {
      this.shoppingList[index].marked = !this.shoppingList[index].marked;
    }
    console.log(this.shoppingList);
    this.storage.set(this.SHOPPING_LIST_STORAGE_KEY, this.shoppingList);
  }

  deleteFromShoppingList(product: string): void {
    var index: number = this.getIndexInShoppongList(product);
    if (index > -1) {
      this.shoppingList.splice(index, 1);
    }
    console.log(this.shoppingList);
    this.storage.set(this.SHOPPING_LIST_STORAGE_KEY, this.shoppingList);
  }

  moveUp(product: string): void {
    var index: number = this.getIndexInShoppongList(product);
    this.shoppingList.splice(index -1, 0, this.shoppingList.splice(index, 1)[0]);
    this.storage.set(this.SHOPPING_LIST_STORAGE_KEY, this.shoppingList);
  }

  moveDown(product: string): void {
    var index: number = this.getIndexInShoppongList(product);
    this.shoppingList.splice(index + 1, 0, this.shoppingList.splice(index, 1)[0]);
    this.storage.set(this.SHOPPING_LIST_STORAGE_KEY, this.shoppingList);
  }

  private getIndexInShoppongList(product: string): number {
    for (var i: number = 0; i < this.shoppingList.length; i++) {
      if (this.shoppingList[i].product.name === product) {
        return i;
      }
    }
    return -1;
  }
  private prepareData(): void {
    //init
    console.log("prepare data");
    this.prepareShoppingList();
    this.prepareProducts();
  }

  private prepareProducts(): void {
    this.products = [];
  }

  private prepareShoppingList(): void {
    // this.shoppingList = [];
    // this.shoppingList.push({
    //   product: {name: "עגבניות"}
    // });
    // storage.set('name', 'Max');

    console.log("prepareShoppingList");
    this.shoppingList = [];
    this.storage.get(this.SHOPPING_LIST_STORAGE_KEY).then(val => {
      if (val != null) {
        this.shoppingList = val;
      }
      console.log("shopping list is", val);
    });
  }
}
