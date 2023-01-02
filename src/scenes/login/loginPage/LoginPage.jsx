import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  GlobalStyles,
  InputBase,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, { AxiosError } from "axios";

import logo from "../../../assets/images/monkeyLogo.png";
import styles from "./loginPage.module.scss";
import constants from "../../../utils/constants.json";
import { useCalculateHash } from "../../../hooks/useCalculateHash";

const inputStyle = {
  height: "70px",
  width: "100%",
  fontWeight: 300,
  fontSize: "20px",
  lineHeight: "20px",
  color: "#4f555a",
  padding: "0 20px",
};

const schema = yup
  .object({
    username: yup.string().email(constants.form.error.email).required(),
    password: yup
      .string()
      .min(7, constants.form.error.passwordMin)
      .max(16, constants.form.error.passwordMax)
      .required(),
  })
  .required();

const LoginForm = () => {
  const [errorApi, setErrorApi] = useState("");
  const navigate = useNavigate();
  const signIn = useSignIn();
  const { login } = useAuthentication();
  const { calculateHash } = useCalculateHash();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // const response = await login(data);

    // if (!response.error) {
    //   signIn({
    //     token: response.token,
    //     expiresIn: 3600,
    //     tokenType: "Bearer",
    //     authState: response.user,
    //   });

    //   navigate("/");
    // } else {
    //   setErrorApi(response.error);
    // }

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
        const { data } = response.data;

        signIn({
          token: data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: data.user,
        });

        navigate("/");
      }
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError("*" + err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);

      // console.log("Error", err);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      className={styles.loginContainer}
    >
      <Container maxWidth="sm">
        <GlobalStyles
          styles={{
            "::placeholder": {
              letterSpacing: 0,
            },
          }}
        />
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.logoContainer}>
            <img src={logo} alt="" />
          </div>
          <Box
            bgcolor="rgba(240, 240, 240, 0.8)"
            border="none"
            borderRadius="15px"
            marginTop="25px"
          >
            <InputBase
              sx={inputStyle}
              type="email"
              required
              placeholder="Enter Email"
              autoComplete="false"
              onKeyUp={() => setErrorApi("")}
              {...register("username")}
            />
          </Box>
          <Box
            bgcolor="rgba(240, 240, 240, 0.8)"
            border="none"
            borderRadius="15px"
            marginTop="25px"
          >
            <InputBase
              sx={{
                ...inputStyle,
                letterSpacing: "4px",
              }}
              type="password"
              required
              placeholder="Password"
              onKeyUp={() => setErrorApi("")}
              {...register("password")}
            />
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            width="100%"
            mt="10px"
          >
            <Box color="#FFDC79">
              <Typography variant="span" component="p">
                {errorApi}
              </Typography>
              <Typography variant="span" component="p">
                {errors.username?.message}
              </Typography>
              <Typography variant="span" component="p">
                {errors.password?.message}
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              onClick={() => navigate("/reset")}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Forgot Password?
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt="60px"
          >
            <Button
              sx={{
                width: "200px",
                bgcolor: "#EFEFEF",
                color: "#61481C",
                fontSize: "14px",
                "&:hover": {
                  bgcolor: "#EFEFEF",
                },
                textTransform: "capitalize",
              }}
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              {!isSubmitting ? `Log in` : "..."}
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default LoginForm;
