import { apiClientFactory } from '@vue-storefront/core';
import type { Settings } from './types';
import { apiClient } from './helpers/apiClient';
import * as api from './api';

function onCreate(settings: Settings) {
  return {
    config: settings,
    client: apiClient(settings)
  };
}

const { createApiClient } = apiClientFactory({
  onCreate,
  api
});

export {
  createApiClient
};
