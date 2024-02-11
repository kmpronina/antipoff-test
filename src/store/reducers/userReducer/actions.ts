import {
  getSelectedUserData,
  getUsersData,
} from "#api/userService/userService";
import { UserType } from "#models/userTypes";
import { AnyAction } from "#store/store";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setActivePage,
  setUsersPerPage,
  setTotalQuantityOfUsers,
  setTotalQuantityOfPages,
  setUsers,
  setActiveUser,
} from ".";

export const getDataAction =
  (pageNumber: number) => async (dispatch: Dispatch<AnyAction>) => {
    const usersData = await getUsersData(pageNumber);

    if (!usersData) return;

    const { page, per_page, total, total_pages, data } = usersData;

    const pageFromStorage = localStorage.getItem("activePage");

    if (pageFromStorage !== null && JSON.parse(pageFromStorage) >= page) {
      const usersFromStorage = localStorage.getItem("users");

      if (usersFromStorage !== null) {
        const currentUsers: UserType[] = structuredClone(
          JSON.parse(usersFromStorage),
        );
        dispatch(setUsers(currentUsers));
      }
    } else {
      dispatch(setActivePage(page));
      localStorage.setItem("activePage", JSON.stringify(page));

      dispatch(setUsersPerPage(per_page));

      dispatch(setTotalQuantityOfUsers(total));

      dispatch(setTotalQuantityOfPages(total_pages));

      const usersFromStorage = localStorage.getItem("users");
      if (usersFromStorage !== null) {
        const currentUsers: UserType[] = structuredClone(
          JSON.parse(usersFromStorage),
        );
        localStorage.removeItem("users");
        dispatch(setUsers(currentUsers.concat(data)));
        localStorage.setItem(
          "users",
          JSON.stringify(currentUsers.concat(data)),
        );
      } else {
        dispatch(setUsers(data));
        localStorage.setItem("users", JSON.stringify(data));
      }
    }
  };

export const getSelectedUserDataAction =
  (userId: number) => async (dispatch: Dispatch<AnyAction>) => {
    const selectedUserData = await getSelectedUserData(userId);

    if (!selectedUserData) return;

    dispatch(setActiveUser(selectedUserData));
  };
