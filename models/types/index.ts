type UserLogin = {
  email: string;
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
// src/types.ts
export interface Post {
  coverPhoto?: string;
  headerText: string;
  contentText: string;
}

export type { UserLogin, UserRegister };
