import { AuthResponseErrorType, AuthResponseType } from "#models/authTypes";
import { createSlice } from "@reduxjs/toolkit";

type AuthReducerType = {
  authData: AuthResponseType | AuthResponseErrorType | null;
  authEmail: string | null;
};

const authReducer = createSlice({
  name: "auth",
  initialState: { authData: null, authEmail: null } as AuthReducerType,

  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
    },
    setAuthEmail: (state, action) => {
      state.authEmail = action.payload;
    },
  },
});

export const { setAuthData, setAuthEmail } = authReducer.actions;

export default authReducer.reducer;
