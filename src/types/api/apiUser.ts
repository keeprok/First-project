export type user = {
  email: string;
  pw: string;
};
export type PostSignUpFT = (input: user) => Promise<void>;
