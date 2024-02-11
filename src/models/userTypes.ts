export type UserFromResponseType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  isLiked: boolean;
};

type SupportDatatype = {
  url: string;
  text: string;
};

export type ListOfUsersFromResponseType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserFromResponseType[];
  support: SupportDatatype;
};

export type ListOfUsersType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserType[];
  support: SupportDatatype;
};

export type SelectedUserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  description: DescriptionItem[];
  phone: string;
  role: string;
};

type DescriptionItem = {
  id: string;
  text: string;
};
