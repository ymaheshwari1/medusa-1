import { Context } from '@vue-storefront/core';
import { Category } from '../../types';

// TODO: add type for category query
export const listCategories = async (context: Context, query?: any): Promise<Category[]> => {
  try {
    const { collections } = await context.client.collections.list();
    return collections;
  } catch (error) {
    throw new Error(error);
  }
};
