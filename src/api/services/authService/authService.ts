import { api } from "./constants";
import { AuthRequestType } from "#models/authTypes";

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
