import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import { useCalculateHash } from "./useCalculateHash";

export const useAuthentication = () => {
  const { calculateHash } = useCalculateHash();
  const navigate = useNavigate();
  const signOut = useSignOut();

  const login = async (data) => {
    /*
    God Account:
      email : techsupport@1bit.com.ph
      password : password
    */

    try {
      // START: Access login API
      const endpoint = "api/admin/login";
      const options = {
        headers: {
          "X-Authorization": calculateHash(endpoint, data),
        },
        withCredentials: true,
      };

      const response = await axios.post(endpoint, data, options);
      // END: Access login API

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

  const logout = () => {
    // React auth kit signout
    signOut();

    // Navigate to login page
    navigate("/login");
  };

  return { login, logout };
};
