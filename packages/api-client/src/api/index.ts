import { Logger } from '@vue-storefront/core';

export { createCart } from './createCart';
export { listProducts } from './listProducts';
export { productDetails } from './productDetails';
export { register } from './register';

export async function bootstrap(context, params) {
  let response;
  try {
    response = await context.client(params);
    return { response };
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // cookieObject = cookieParser(error.response?.headers);

      return { error };
    }
  }
}