/* eslint-disable camelcase */
import { Context } from '@vue-storefront/core';
import { tokenHandler } from '../../helpers/tokenHandler';
import { User } from '../../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function login (context: Context, params: any) {
  try {
    const { customer, response } = await context.client.auth.authenticate(params);
    tokenHandler(response)

    return customer;
  } catch (error) {
    throw new Error(error);
  }
}
