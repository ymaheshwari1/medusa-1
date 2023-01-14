/* eslint-disable camelcase */
import { Context } from '@vue-storefront/core';
// import { User } from '../../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function loadUser (context: Context) {
  try {
    const { customer } = await context.client.auth.getSession();
    return customer;
  } catch (error) {
    return { error };
  }
}
