/* eslint-disable camelcase */
import { Context } from '@vue-storefront/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function logout (context: Context) {
  try {
    const { data } = await context.client.auth.deleteSession();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
