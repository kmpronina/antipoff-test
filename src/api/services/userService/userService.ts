import {
  ListOfUsersFromResponseType,
  ListOfUsersType,
  SelectedUserType,
  UserFromResponseType,
} from "#models/userTypes";
import { api, description, phone, role } from "./constants";

export const getUsersData = async (
  pageNumber: number,
): Promise<ListOfUsersType | false> => {
  const rawData = await fetch(`${api}users?page=${pageNumber}`);
  const allData: ListOfUsersFromResponseType = await rawData.json();

  if (!allData) return false;

  const { page, per_page, total, total_pages, data, support } = allData;

  const customData: ListOfUsersType = {
    page: page,
    per_page: per_page,
    total: total,
    total_pages: total_pages,
    data: data.map((user: UserFromResponseType) => ({
      id: user.id,
      isLiked: false,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar,
    })),
    support: support,
  };
  return customData;
};

export const getSelectedUserData = async (
  id: number,
): Promise<SelectedUserType | false> => {
  const rawData = await fetch(`${api}users/${id}`);
  const dataFromResponse = await rawData.json();

  if (!dataFromResponse) return false;

  const { data } = dataFromResponse;

  const customData: SelectedUserType = {
    id: data.id,
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name,
    avatar: data.avatar,
    description: description,
    phone: phone,
    role: role,
  };
  return customData;
};
