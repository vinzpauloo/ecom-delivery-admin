import axios, { AxiosError } from "axios";
import { useCalculateHash } from "./useCalculateHash";
import { useAuthHeader } from "react-auth-kit";

export const useCountProduct = () => {
  const { calculateHash } = useCalculateHash();
  const authHeader = useAuthHeader();

  const getCountProduct = async (data) => {
    try {
      const endpoint = "api/products";
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
  const getMinimumPrice = async (data) => {
    try {
      // START: Access get all restaurants API
      const endpoint = "api/products";
      const options = {
        params: data,
        headers: {
          "X-Authorization": calculateHash(endpoint, data),
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
  const getMaximumPrice = async (data) => {
    try {
      // START: Access get all restaurants API
      const endpoint = "api/products";
      const options = {
        params: data,
        headers: {
          "X-Authorization": calculateHash(endpoint, data),
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
  const getSumPrice = async (data) => {
    try {
      // START: Access get all restaurants API
      const endpoint = "api/products";
      const options = {
        params: data,
        headers: {
          "X-Authorization": calculateHash(endpoint, data),
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
  const getAveragePrice = async (data) => {
    try {
      // START: Access get all restaurants API
      const endpoint = "api/products";
      const options = {
        params: data,
        headers: {
          "X-Authorization": calculateHash(endpoint, data),
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

  return {
    getCountProduct,
    getMinimumPrice,
    getMaximumPrice,
    getSumPrice,
    getAveragePrice,
  };
};
