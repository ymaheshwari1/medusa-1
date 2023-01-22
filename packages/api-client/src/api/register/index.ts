/* eslint-disable camelcase */
import { Context } from '@vue-storefront/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function register (context: Context, params: any) {
  try {
    const data = await context.client.customers.create(params);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
