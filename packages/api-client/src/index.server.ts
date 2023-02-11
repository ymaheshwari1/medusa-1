import * as api from './api';
import { apiClient } from './helpers/apiClient';
import { apiClientFactory } from '@vue-storefront/core';
import { Config } from './types';
import { cookieManager } from './extensions/cookieManager';
import { defaultSettings } from './helpers/defaultSettings';
import { KeyManager } from '@medusajs/medusa-js';

function onCreate(settings: Config) {
  const config = {
    ...defaultSettings,
    ...settings,
    state: settings.state || defaultSettings.state
  } as unknown as Config;

  if (settings.client) {
    return {
      client: settings.client,
      config
    };
  }

  return {
    config: settings,
    client: apiClient({
      api: config.api,
      ...config.customOptions,
      publishableApiKey: KeyManager.getPublishableApiKey()
    })
  };
}

const { createApiClient } = apiClientFactory({
  onCreate,
  api,
  extensions: [cookieManager]
});

export {
  createApiClient
};