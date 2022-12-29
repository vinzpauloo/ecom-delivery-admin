import { Box, Button, InputBase } from "@mui/material";
import React from "react";
import styles from "./resetPasswordPage.module.scss";
import monkeyLogo from "../../../assets/images/monkeyLogo.png";
import { useNavigate } from "react-router-dom";

const inputStyle = {
  height: "55px",
  width: "467px",
  fontWeight: 300,
  fontSize: "20px",
  lineHeight: "20px",
  color: "#4f555a",
  padding: "0 20px",
};

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      className={styles.loginContainer}
    >
      <form className={styles.formContainer}>
        <img src={monkeyLogo} alt="" className={styles.monkeyLogo} />
        <Box
          bgcolor="rgba(240, 240, 240, 0.8)"
          border="none"
          borderRadius="15px"
          marginTop="25px"
        >
          <InputBase
            sx={inputStyle}
            type="Enter Email"
            required
            placeholder="Enter Email"
            autoComplete="false"
          />
        </Box>
        <Box
          display="flex"
          alignItem="center"
          justifyContent="center"
          mt="25px"
        >
          <Button
            sx={{
              width: "150px",
              bgcolor: "#EFEFEF",
              color: "#61481C",
              fontSize: "14px",
              "&:hover": {
                bgcolor: "#EFEFEF",
              },
            }}
            variant="contained"
            onClick={() => navigate("/otp")}
          >
            RESET PASSWORD
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ResetPasswordPage;
