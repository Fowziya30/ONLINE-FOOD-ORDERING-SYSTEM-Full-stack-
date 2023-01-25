





export class User {
  id: number;
  username: string;
  password: string;
  address: string;
  admin: boolean;
  cardNumber: string;
  cvv: any;
  email: string;
  nameOnCard: string

}
export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  pictureUrl: string;
}
export interface Category {
  id: number,
  name: string
}
export interface Comment {
  id: number,
  addedAt: any,
  addedBy: string,
  message: string,
  title: string
}
export interface ReplayComment {
  id: number,
  addedAt: any,
  addedBy: string,
  messageReplay: string
}
export interface Order {
  id: number,
  dateCreated: any,
  status: any
}
export class ProductOrder {
  id: number;
  product: Product;
  quantity: number = 1;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity = 1;
  }
}
export class ProductOrders {
  productOrders: ProductOrder[] = [];
}
export interface Product {
  id: number,
  description: string,
  name: string,
  pictureUrl: string,
  price: number
}
export interface Tag {
  id: number,
  name: string,
  products: any
}
export class Item {
  name: string;
  value: string;
  price: number;
}
export class UpdateProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
}
export const ITEMS: Item[] = [

  {
    name: 'Quick Delivery within 15 minutes (RUPEES): ',
    value: 'item_2',
    price: 30 
  },
  {
    name: ' OTHERWISE FREE!!!!! ',
    value: 'item_3',
    price: 0
  },
  
];
