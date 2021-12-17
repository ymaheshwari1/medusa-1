import { Context } from '@vue-storefront/core';
import { ListProductSearchQuery, Product } from '../../types';

export const listProducts = async (context: Context, query?: ListProductSearchQuery): Promise<Product[]> => {
  try {
    const { products } = await context.client.products.list(query);
    return products;
  } catch (error) {
    throw new Error(error);
  }
};
