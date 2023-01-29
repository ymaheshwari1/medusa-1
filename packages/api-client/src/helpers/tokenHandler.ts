import { KeyManager } from "@medusajs/medusa-js";

export const tokenHandler = (response: any) => {
  const cookie = response.headers['set-cookie'][0]

  if(cookie.includes('connect.sid')) {
    const medusaToken = cookie.substring(cookie.indexOf('=') + 1, cookie.indexOf(';'))
    
    KeyManager.registerPublishableApiKey(medusaToken)
  }
};
