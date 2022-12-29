import axios, { AxiosError } from "axios";
import { useCalculateHash } from "./useCalculateHash";

export const useRiders = () => {
  const { calculateHash } = useCalculateHash();

  const getRiders = async () => {
    try {
      // START: Access get all riders API
      const endpoint = "api/riders";
      const options = {
        headers: {
          "X-Authorization": calculateHash(endpoint),
        },
        // withCredentials: true,
      };

      const response = await axios.get(endpoint, options);
      // END: Access get all riders API

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
  const updateRiderStatus = async (id, data) => {
    try {
      // START: Access update rider status API
      const endpoint = `api/riders/${id}/approval`;
      const options = {
        headers: {
          "X-Authorization": calculateHash(endpoint, data),
        },
      };

      const response = await axios.put(endpoint, data, options);
      // END: Access update rider status API

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
    getRiders,
    updateRiderStatus,
  };
};
