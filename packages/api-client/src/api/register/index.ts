/* eslint-disable camelcase */
import { Context } from '@vue-storefront/core';
// import { User } from '../../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function register (context: Context, params: any) {
  console.log('customer register params', params)
  try {
    const { customer } = await context.client.customers.create(params);
    console.log('customer registered', customer)
    return customer;
  } catch (error) {
    throw new Error(error);
  }
}
