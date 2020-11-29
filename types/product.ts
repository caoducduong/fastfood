export interface Product {
  id: string;
  name: string;
  rate: number;
  price: number;
  oldPrice: number;
  type: string;
  link: string;
}
export interface Cart {
  id: string;
  quantity: number;
  pick: boolean;
}
