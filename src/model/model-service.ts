import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";

@Injectable()
export class ModelService {
  private database: database;
  private readonly DATABASE_STORAGE_KEY: string = "digitize.theapp.database";

  constructor(private storage: Storage) {
    console.log("constructor model-service");
  }

  getProductList(): product[] {
    if (this.database == null) {
      this.prepareData();
    }
    return this.database.products;
  }

  getShoppingList(): listItem[] {
    if (this.database == null) {
      this.prepareData();
    }
    return this.database.shoppingList;
  }

  addToShoppingList(productName: string) {
    let product: product = this.getOrCreateProduct(productName);
    this.database.shoppingList.push({ product_id: product.id });
    this.storage.set(this.DATABASE_STORAGE_KEY, this.database);
  }

  getOrCreateProduct(productName: string): product {
    let product: product = this.getProductFromProductsList(productName);
    if (product == null) {
      let maxId = -1;
      for (var i: number = 0; i < this.database.products.length; i++) {
        if (this.database.products[i].id > maxId) {
          maxId = this.database.products[i].id;
        }
      }
      product = { id: maxId + 1, name: productName };
      this.database.products.push(product);
      this.storage.set(this.DATABASE_STORAGE_KEY, this.database);
    }
    return product;
  }

  getProductFromProductsList(productName: string): product {
    for (var i: number = 0; i < this.database.products.length; i++) {
      if (this.database.products[i].name === productName) {
        return this.database.products[i];
      }
    }
  }

  markShoppingListItem(listItem: listItem): void {
    var index: number = this.getIndexInShoppongList(listItem.product_id);
    if (index > -1) {
      this.database.shoppingList[index].marked = !this.database.shoppingList[index].marked;
    }
    console.log(this.database.shoppingList);
    this.storage.set(this.DATABASE_STORAGE_KEY, this.database);
  }

  deleteFromShoppingList(listItem: listItem): void {
    var index: number = this.getIndexInShoppongList(listItem.product_id);
    if (index > -1) {
      this.database.shoppingList.splice(index, 1);
    }
    console.log(this.database.shoppingList);
    this.storage.set(this.DATABASE_STORAGE_KEY, this.database);
  }

  moveUp(listItem: listItem): void {
    var index: number = this.getIndexInShoppongList(listItem.product_id);
    this.database.shoppingList.splice(
      index - 1,
      0,
      this.database.shoppingList.splice(index, 1)[0]
    );
    this.storage.set(this.DATABASE_STORAGE_KEY, this.database);
  }

  moveDown(listItem: listItem): void {
    var index: number = this.getIndexInShoppongList(listItem.product_id);
    this.database.shoppingList.splice(
      index + 1,
      0,
      this.database.shoppingList.splice(index, 1)[0]
    );
    this.storage.set(this.DATABASE_STORAGE_KEY, this.database);
  }

  getProductName(id: number): string {
    for (var i: number = 0; i < this.database.products.length; i++) {
      if (this.database.products[i].id === id) {
        return this.database.products[i].name;
      }
    }
  }

  private getIndexInShoppongList(productId: number): number {
    for (var i: number = 0; i < this.database.shoppingList.length; i++) {
      if (this.database.shoppingList[i].product_id === productId) {
        return i;
      }
    }
    return -1;
  }
  private prepareData(): void {
    //init
    console.log("prepare data");
    console.log("prepareProducts");
    this.database = {
      version: 0,
      products: [],
      stores: [],
      shoppingList: [],
      storeOrders: []
    };
    // this.storage.remove(this.PRODUCTS_STORAGE_KEY);
    this.storage.get(this.DATABASE_STORAGE_KEY).then(val => {
      if (val != null) {
        this.database = val;
        if (this.database.version == null) {
          this.database.version = 0;
          this.storage.set(this.DATABASE_STORAGE_KEY, this.database);
        }
      }
      console.log("db is", val);
    });
  }
}
