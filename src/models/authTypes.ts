export type AuthRequestType = {
  email: string;
  password: string;
};

export type AuthResponseType = {
  id: number;
  token: string;
  email: string;
};

export type AuthResponseErrorType = {
  error: string;
};

export type SingUpDataType = {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
};
