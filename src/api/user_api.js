/* eslint-disable prettier/prettier */

import ApiManager from './ApiManager';

export const user_login = async data => {
  try {
    const result = await ApiManager('/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export const user_register = async data => {
    try {
      const result = await ApiManager('/auth/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        data: data,
      });
      return result;
    } catch (error) {
      return error.response.data;
    }
  };

  