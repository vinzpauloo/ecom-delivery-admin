import axios, { AxiosError } from "axios";
import { useCalculateHash } from "./useCalculateHash";

export const useRestaurants = () => {
  const { calculateHash } = useCalculateHash();

  const getRestaurants = async () => {
    try {
      // START: Access get all restaurants API
      const endpoint = "api/merchants";
      const options = {
        headers: {
          "X-Authorization": calculateHash(endpoint),
        },
        // withCredentials: true,
      };

      const response = await axios.get(endpoint, options);
      // END: Access get all restaurants API

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

  /*
  @params
    approval = ['Applied', 'Approved', 'Declined','Hold']
    approval_reason = "string"
  */
  const updateRestaurantStatus = async (id, data) => {
    try {
      // START: Access update restaurant status API
      const endpoint = `api/merchants/${id}/approval`;
      const options = {
        headers: {
          "X-Authorization": calculateHash(endpoint, data),
        },
      };

      const response = await axios.put(endpoint, data, options);
      // END: Access update restaurant status API

      if (response.status === 200) {
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
    getRestaurants,
    updateRestaurantStatus,
  };
};
