/* eslint-disable camelcase */
import { Context } from '@vue-storefront/core';
// import { User } from '../../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function register (context: Context, params: any) {
  const url = new URL('http://localhost:9000' + '/store/customers');
  const { email, password, firstName, lastName } = params;

  const { data, headers } = await context.client.post(url.href, {
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName
  });

  return { data, headers };
}
