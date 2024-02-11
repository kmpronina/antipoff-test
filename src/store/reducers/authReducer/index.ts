import { AuthResponseErrorType, AuthResponseType } from "#models/authTypes";
import { createSlice } from "@reduxjs/toolkit";

type AuthReducerType = {
  authData: AuthResponseType | AuthResponseErrorType | null;
};

const authReducer = createSlice({
  name: "auth",
  initialState: { authData: null } as AuthReducerType,

  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
    },
  },
});

export const { setAuthData } = authReducer.actions;

export default authReducer.reducer;
