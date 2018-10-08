import { StoreOrder } from "./store-order";

export interface product {
    id: number,
    name: string,
}

export interface listItem {
    product_id: number,
    marked?: boolean
}

export interface store {
    id: number,
    name: string
}

export interface database {
    version: number,
    products?: product[],
    shoppingList?: listItem[],
    stores?: store[],
    storeOrders: {}
}