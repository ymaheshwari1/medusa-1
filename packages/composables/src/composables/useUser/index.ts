import {
  Context,
  Logger,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
import type { User } from '@vue-storefront/medusa-api';
import type {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../../types';

const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    const loadUser = async () => {
      Logger.debug('[Medusa]: Loading user');
      return context.$medusa.api.loadUser();
    };

    const data = await loadUser();

    console.log('data in load', data)

    if(data.error) {
      return;
    }

    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context) => {
    const logout = async () => {
      Logger.debug('[Medusa]: Logging out user');
      return context.$medusa.api.logout();
    };

    const data = await logout();

    if(data.error) {
      return;
    }

    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, params: any) => {
    const updateCustomer = async () => {
      Logger.debug('[Medusa]: Updating user');
      return context.$medusa.api.updateUser({ first_name: params.firstName, last_name: params.lastName, email: params.email });
    };

    const data = await updateCustomer();

    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async (context: Context, { email, password, firstName, lastName }) => {
    const registerUser = async () => {
      Logger.debug('[Medusa]: Registering user');
      return context.$medusa.api.register({ email, password, first_name: firstName, last_name: lastName });
    };

    const data = await registerUser();

    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password }) => {
    const customerLogin = async () => {
      return context.$medusa.api.login({ email: username, password });
    }

    const data = await customerLogin();

    console.log('data composables login', data)

    if(!data.id) {
      return;
    }

    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword }) => {
    console.log('Mocked: useUser.changePassword');
    return {} as User;
  }
};

export const useUser = useUserFactory<User, UpdateParams, RegisterParams>(params);
