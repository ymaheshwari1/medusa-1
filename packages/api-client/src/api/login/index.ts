/* eslint-disable camelcase */
import { Context } from '@vue-storefront/core';
import { User } from '../../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function login (context: Context, params: any) {
  try {
    const {customer, response} = await context.client.auth.authenticate(params);

    const cookie = response.headers['set-cookie']

    if(cookie[0].includes('connect.sid')) {
      const medusaToken = cookie[0].substring(cookie[0].indexOf('=') + 1, cookie[0].indexOf(';'))
      await context.client.setPublishableKey(medusaToken);
      return customer;
    } else {
      return '';
    }
  } catch (error) {
    throw new Error(error);
  }
}
