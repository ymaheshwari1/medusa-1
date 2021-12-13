import { Context } from '@vue-storefront/core';
import { Cart } from '../../types';

/**
 * @remarks References:
 * {@link Cart}
 */
export const createCart = async (context: Context): Promise<Cart> => context.client.carts.create();
