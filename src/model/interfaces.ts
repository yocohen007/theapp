interface product {
    id: number,
    name: string,
}

interface listItem {
    product_id: number,
    marked?: boolean
}

interface store {
    id: number,
    name: string
}

interface storeOrder {
    store_id: number,
    product_id: number,
    order: number
}

interface database {
    version: number,
    products?: product[],
    shoppingList?: listItem[],
    stores?: store[],
    storeOrders?: storeOrder[]
}