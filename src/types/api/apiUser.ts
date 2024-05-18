export type User = {
  email: string;
  pw: string;
};
export type PostSignUpFT = (input: User) => Promise<void>;
