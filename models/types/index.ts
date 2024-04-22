type UserLogin = {
  username: string;
  password: string;
  rememberMe: boolean;
};
type UserRegister = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  agreeTerms: boolean;
};
export type { UserLogin, UserRegister };
