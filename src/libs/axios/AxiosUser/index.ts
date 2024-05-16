import { user } from '../../../types/api/apiUser';
import { setSessionAccessToken } from '../../../utils/auth-storage-manager';
import { axiosInstanse } from '../instanse';

export const postSignUp = async ({ email, pw }: user) => {
  const response = await axiosInstanse.post('/todo/user/sign-up', { email, pw });
  console.log(response);
  return response;
};

export const postSignIn = async ({ email, pw }: user) => {
  const response = await axiosInstanse.post('/todo/user/sign-in', { email, pw });

  console.log(response.data);
  setSessionAccessToken(response.data.token);
};

//
