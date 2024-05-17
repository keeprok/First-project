import { user } from '../../../types/api/apiUser';
import { setSessionAccessToken } from '../../../utils/auth-storage-manager';
import { axiosInstanse } from '../instanse';

export const postSignUp = async ({ email, pw }: user) => {
  const response = await axiosInstanse.post('/todo/user/sign-up', { email, pw });
  return response.data;
};

export const postSignIn = async ({ email, pw }: user) => {
  const response = await axiosInstanse.post('/todo/user/sign-in', { email, pw });

  setSessionAccessToken(response.data.token);
};

//
