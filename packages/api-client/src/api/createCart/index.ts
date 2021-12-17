import { Context } from '@vue-storefront/core';
import { Cart } from '../../types';

export const createCart = async (context: Context): Promise<Cart> => context.client.carts.create();
