import { User } from '../../../types/api/apiUser';
import { setSessionAccessToken } from '../../../utils/token/auth-storage-manager';
import { axiosInstanse } from '../instanse';

export const postSignUp = async ({ email, pw }: User) => {
  const response = await axiosInstanse.post('/todo/user/sign-up', { email, pw });
  return response.data;
};

export const postSignIn = async ({ email, pw }: User) => {
  const response = await axiosInstanse.post('/todo/user/sign-in', { email, pw });

  setSessionAccessToken(response.data.token);
};

//
