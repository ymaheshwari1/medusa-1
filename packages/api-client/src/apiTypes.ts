import { Cart } from './types';

export type Endpoints = {
  createCart(): Promise<Cart>;
};
