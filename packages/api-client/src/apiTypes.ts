import { Cart, ListProductSearchQuery, Product, User } from './types';

export type Endpoints = {
  createCart(): Promise<Cart>;
  listProducts(query?: ListProductSearchQuery): Promise<Product[]>;
  productDetails(id: string): Promise<Product>;
  register(params: any): Promise<User>;
};
