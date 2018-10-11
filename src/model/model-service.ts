import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import { Database, Product, ListItem, Store } from "../common/interfaces";
import { StoreOrder } from "../common/store-order";

@Injectable()
export class ModelService {
  private database: Database;
  private readonly DATABASE_STORAGE_KEY: string = "digitize.theapp.database";
  private storeOrder: StoreOrder;
  private orderedListCache: ListItem[];

  constructor(private storage: Storage) {
    console.log("constructor model-service");
    this.prepareData();
  }

  getProductList(): Product[] {
    return this.database.products.slice();
  }

  getStoresList(): Store[] {
    return this.database.stores.slice();
  }

  getShoppingList(): ListItem[] {
    return this.database.shoppingList.slice();
  }

  getOrderedShoppingList(store_id: number): ListItem[] {
    // console.log("getOrderedShoppingList for " + store_id)
    if (this.orderedListCache != null && this.storeOrder != null && this.storeOrder.getStoreId() == store_id) {
      return this.orderedListCache.slice();
    }

    var storeOrder: StoreOrder = this.getStoreOrder(store_id);
    if (storeOrder == null) {
      return this.database.shoppingList;
    } else {
      let orderedList = storeOrder.getOrderedList(this.database.shoppingList);
      this.orderedListCache = orderedList;
      return orderedList;
    }
  }

  private getStoreOrder(store_id: number): StoreOrder {
    if (this.storeOrder != null && this.storeOrder.getStoreId() == store_id) {
      return this.storeOrder;
    }
    if (this.database.storeOrders == null) {
      this.database.storeOrders = {};
    }
    var order: number[] = this.database.storeOrders[store_id];
    if (order == null && store_id != 0) {
      if (this.isStoreExist(store_id)) {
        //create new store order
        order = this.database.storeOrders[0].slice();
        this.database.storeOrders[store_id] = order;
        this.persistDB();
      } else {
        return this.getStoreOrder(0);
      }
    }
    if (order == null) {
      order = [];
    }
    let storeOrder: StoreOrder = new StoreOrder(order, store_id);
    console.dir(storeOrder);
    this.storeOrder = storeOrder;
    return storeOrder;
  }

  isStoreExist(store_id: number): boolean {
    for (var i: number = 0; i < this.database.stores.length; i++) {
      if (this.database.stores[i].id === store_id) {
        return true;
      }
    }
    return false;
  }

  addToShoppingList(productName: string) {
    let product: Product = this.getOrCreateProduct(productName);
    this.database.shoppingList.push({ product_id: product.id });
    this.resetCache(true);
    this.persistDB();
  }

  public addProduct(productName: string) {
    this.getOrCreateProduct(productName);
    this.resetCache(true);
    this.persistDB();
  }

  public addStore(storeName: string) {
    this.getOrCreateStore(storeName);
    this.resetCache(true);
    this.persistDB();
  }

  markShoppingListItem(listItem: ListItem): void {
    var index: number = this.getIndexInShoppongList(listItem.product_id);
    if (index > -1) {
      this.database.shoppingList[index].marked = !this.database.shoppingList[index].marked;
    }
    console.log(this.database.shoppingList);
    this.persistDB();
  }

  deleteFromShoppingList(listItem: ListItem): void {
    var index: number = this.getIndexInShoppongList(listItem.product_id);
    if (index > -1) {
      this.database.shoppingList.splice(index, 1);
    }
    this.resetCache(true);
    this.persistDB();
  }

  moveUp(listItem: ListItem, store_id: number = 0): void {
    this.moveItem(listItem, store_id, true);
  }

  moveDown(listItem: ListItem, store_id: number = 0): void {
    this.moveItem(listItem, store_id, false);
  }

  getProductName(id: number): string {
    return this.getProduct(id).name;
  }

  getProduct(id: number): Product {
    for (var i: number = 0; i < this.database.products.length; i++) {
      if (this.database.products[i].id === id) {
        return Object.assign({}, this.database.products[i]);
      }
    }
  }

  private moveItem(listItem: ListItem, store_id: number = 0, up: boolean): void {
    console.log("moveItem " + store_id);
    console.dir(listItem);
    let storeOrder: StoreOrder = this.getStoreOrder(store_id);
    var index: number = this.getIndexInOrderedShoppongList(listItem.product_id);
    let newIndex = up ? index - 1 : index + 1;
    let replacedProductId: number = this.orderedListCache[newIndex].product_id;
    storeOrder.moveItem(listItem.product_id, replacedProductId);
    this.resetCache();
    this.database.storeOrders[store_id] = storeOrder.getOrder();
    this.persistDB();
  }

  private getOrCreateProduct(productName: string): Product {
    let product: Product = this.getProductFromProductsList(productName);
    if (product == null) {
      //find correct id
      let maxId = -1;
      for (var i: number = 0; i < this.database.products.length; i++) {
        if (this.database.products[i].id > maxId) {
          maxId = this.database.products[i].id;
        }
      }
      product = { id: maxId + 1, name: productName };
      if (this.database.storeOrders[0] == null) {
        this.database.storeOrders[0] = [];
      }
      this.database.products.push(product);
      for (i = 0; i < this.database.stores.length; i++) {
        if (this.database.storeOrders[this.database.stores[i].id] != null) {
          this.database.storeOrders[this.database.stores[i].id].push(product.id);
        }
      }
      this.database.storeOrders[0].push(product.id);
      this.resetCache();
      this.persistDB();
    }
    return product;
  }

  private getOrCreateStore(storeName: string): Store {
    let store: Store = this.getStoreFromStoresList(storeName);
    if (store == null) {
      //find correct id
      let maxId = -1;
      for (var i: number = 0; i < this.database.stores.length; i++) {
        if (this.database.stores[i].id > maxId) {
          maxId = this.database.stores[i].id;
        }
      }
      store = { id: maxId + 1, name: storeName };
      if (this.database.storeOrders[0] == null) {
        this.database.storeOrders[0] = [];
      }
      this.database.stores.push(store);
      this.resetCache();
      this.persistDB();
    }
    return store;
  }

  private getProductFromProductsList(productName: string): Product {
    for (var i: number = 0; i < this.database.products.length; i++) {
      if (this.database.products[i].name === productName) {
        return this.database.products[i];
      }
    }
  }

  private getStoreFromStoresList(storeName: string): Store {
    for (var i: number = 0; i < this.database.stores.length; i++) {
      if (this.database.stores[i].name === storeName) {
        return this.database.stores[i];
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

  private getIndexInOrderedShoppongList(productId: number): number {
    for (var i: number = 0; i < this.orderedListCache.length; i++) {
      if (this.orderedListCache[i].product_id === productId) {
        return i;
      }
    }
    return -1;
  }

  private prepareData(): void {
    this.database = {
      version: 0,
      products: [],
      stores: [{ id: 1, name: "רמי לוי" }, { id: 2, name: "דוכן" }],
      shoppingList: [],
      storeOrders: {}
    };
    // this.storage.remove(this.DATABASE_STORAGE_KEY);
    this.storage.get(this.DATABASE_STORAGE_KEY).then(val => {
      if (val != null) {
        this.database = val;
        if (this.database.version == null) {
          this.database.version = 0;
        }
      }
      this.persistDB();
      this.resetCache();
      console.log("db is", val);
    });
  }

  private persistDB() {
    this.storage.set(this.DATABASE_STORAGE_KEY, this.database);
  }

  private resetCache(onlyListReset: boolean = false): void {
    this.orderedListCache = null;
    if (!onlyListReset) {
      this.storeOrder = null;
    }
  }
}