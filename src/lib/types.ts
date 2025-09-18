export type UserFiltersType = {
  results: number;
  gender: string;
  page: number;
  search: string;
};

export type UserResponseType = {
  gender: string;
  email: string;
  name: { first: string; last: string };
  login: { uuid: string };
  picture: { large: string };
  // define as much types here as you want to use, I only used these types for time saving
};

export type TableSkeletonProps = {
  colCount: number;
  rowsCount: number;
  hasCheckbox?: boolean;
};

export type UserType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  thumbnail: string;
};

export type IconsType = {
  title: "name" | "email" | "gender";
  icon: string;
  width: number;
  height: number;
};
