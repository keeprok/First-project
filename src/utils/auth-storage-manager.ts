import { Access_Token } from './token';

export const setSessionAccessToken = (token: string) => {
  sessionStorage.setItem(Access_Token, token);
};

export const getSessionAccessToken = () => {
  return sessionStorage.getItem(Access_Token);
};
