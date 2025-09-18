import { UserFiltersType, UserResponseType } from "@/lib/types";
import axios from "axios";
type UserApiResponse = {
  results: UserResponseType[];
  // if you want any other data to use then define types here, I only used results key from response
};
export const getUsersData = async (
  params: UserFiltersType
): Promise<UserApiResponse> => {
  try {
    const resp = await axios.get("https://randomuser.me/api/", {
      params: params,
    });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
