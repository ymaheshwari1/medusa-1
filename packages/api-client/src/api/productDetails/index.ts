import { Context } from '@vue-storefront/core';
import { Product } from '../../types';

export const productDetails = async (context: Context, id: string): Promise<Product> => context.client.products.retrieve(id);
