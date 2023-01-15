/* eslint-disable camelcase */
import { Context } from '@vue-storefront/core';
import { User } from '../../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function login (context: Context, params: any): Promise<User> {
  try {
    const { customer } = await context.client.auth.authenticate(params);
    return customer;
  } catch (error) {
    throw new Error(error);
  }
}
