import { createSlice } from "@reduxjs/toolkit";
import { SelectedUserType, UserType } from "#models/userTypes";

type UserReducerType = {
  page: number;
  per_page: number | null;
  total: number;
  total_pages: number | null;
  listOfUsers: UserType[];
  activeUserId: number | null;
  activeUser: SelectedUserType | null;
};

const userReducer = createSlice({
  name: "user",
  initialState: {
    page: 1,
    per_page: null,
    total: 0,
    total_pages: null,
    listOfUsers: [],
    activeUserId: null,
    activeUser: null,
  } as UserReducerType,

  reducers: {
    setActivePage: (state, action) => {
      state.page = action.payload;
    },
    setUsersPerPage: (state, action) => {
      state.per_page = action.payload;
    },
    setTotalQuantityOfUsers: (state, action) => {
      state.total = action.payload;
    },
    setTotalQuantityOfPages: (state, action) => {
      state.total_pages = action.payload;
    },
    setUsers: (state, action) => {
      state.listOfUsers = action.payload;
    },
    setActiveUserId: (state, action) => {
      state.activeUserId = action.payload;
    },
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
  },
});

export const {
  setActivePage,
  setUsersPerPage,
  setTotalQuantityOfUsers,
  setTotalQuantityOfPages,
  setUsers,
  setActiveUserId,
  setActiveUser,
} = userReducer.actions;

export default userReducer.reducer;
