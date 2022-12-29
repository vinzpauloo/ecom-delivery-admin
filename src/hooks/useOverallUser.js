import axios, { AxiosError } from "axios";
import { useCalculateHash } from "./useCalculateHash";
import { useAuthHeader } from "react-auth-kit";

export const useOverallUser = () => {
  const { calculateHash } = useCalculateHash();
  const authHeader = useAuthHeader();

  const getCountAllUser = async (data) => {
    try {
      const endpoint = "api/user";
      const options = {
        params: data,
        headers: {
          Authorization: authHeader(),
          "X-Authorization": calculateHash(endpoint, data),
        },
        // withCredentials: true,
      };

      const response = await axios.get(endpoint, options);

      if (response.status === 200) {
        console.log(response);
        const { data } = response.data;

        return data;
      }
    } catch (err) {
      let error;
      if (err && err instanceof AxiosError)
        error = "*" + err.response?.data.message;
      else if (err && err instanceof Error) error = err.message;

      console.log("Error", err);
      return { error };
    }
  };

  const getUserType = async (data) => {
    try {
      const endpoint = "api/user";
      const options = {
        params: data,
        headers: {
          "X-Authorization": calculateHash(endpoint, data),
        },
        // withCredentials: true,
      };

      const response = await axios.get(endpoint, options);

      if (response.status === 200) {
        console.log(response);
        const { data } = response.data;

        return data;
      }
    } catch (err) {
      let error;
      if (err && err instanceof AxiosError)
        error = "*" + err.response?.data.message;
      else if (err && err instanceof Error) error = err.message;

      console.log("Error", err);
      return { error };
    }
  };

  return {
    getCountAllUser,
    getUserType,
  };
};
