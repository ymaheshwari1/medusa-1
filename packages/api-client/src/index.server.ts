import * as api from './api';
import { apiClientFactory } from '@vue-storefront/core';
import { Settings } from './types';
import { cookieManager } from './extensions/cookieManager';
import axios from 'axios';

const onCreate = (settings) => {
  const client = axios.create({
    baseURL: settings.api.url
  });

  return {
    config: settings,
    client
  };
};

const init = (settings: Settings): any => {
  const client = axios.create({
    baseURL: settings.api.url
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
