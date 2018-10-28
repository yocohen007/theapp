export interface Product {
    id: number,
    name: string,
    icon?: string,
}

export interface ListItem {
    product_id: number,
    quantity?: number,
    marked?: boolean
}

export interface Store {
    id: number,
    name: string
}

export interface PriceCheck {
    product_id: number,
    store_id: number,
    date: string,
    price: number
}

export interface Database {
    version: number,
    products?: Product[],
    shoppingList?: ListItem[],
    stores?: Store[],
    storeOrders: {},
    prices: {},
}