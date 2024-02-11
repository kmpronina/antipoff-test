import { api } from "./constants";
import {
  AuthRequestType,
  AuthResponseErrorType,
  AuthResponseType,
} from "#models/authTypes";
import { AuthMethodsReturnType } from "#hooks/useAuth";

export const signUp = async (signUpData: AuthRequestType) => {
  const rawData = await fetch(`${api}register`, {
    method: "POST",
    body: JSON.stringify(signUpData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return rawData.json();
};

// const checkIsError = (response: any) => {
//   return response.ok ? response.json() : Promise.reject(response.status)
//   }
