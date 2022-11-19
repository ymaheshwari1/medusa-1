import * as api from './api';
import { apiClientFactory } from '@vue-storefront/core';
import { Settings } from './types';
import { cookieManager } from './extensions/cookieManager';
import axios from 'axios';

const onCreate = (settings) => {
  if (!settings?.client) {
    return init(settings);
  }

  return {
    config: settings,
    client: settings.client
  };
};

const init = (settings: Settings): any => {
  const client = axios.create({
    baseURL: settings.api
  });

  return {
    config: settings,
    client
  };
};

const { createApiClient } = apiClientFactory({
  onCreate,
  api,
  extensions: [cookieManager]
});

export {
  createApiClient,
  init
};
