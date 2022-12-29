import React, { useState, useEffect } from "react";
import styles from "./otpPage.module.scss";
import { Box, Button, InputBase, Typography } from "@mui/material";
import monkeyLogo from "../../../assets/images/monkeyLogo.png";
import OtpInput from "./OtpInput";
import { useNavigate } from "react-router-dom";
import { getCountdown } from "../../../utils/formatCountdown";

const OtpPage = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1000);

  useEffect(() => {
    let timer = setInterval(() => {
      if (counter > 0) setCounter(counter - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [counter]);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="column"
      className={styles.loginContainer}
    >
      <img src={monkeyLogo} alt="" className={styles.monkeyLogo} />
      <form className={styles.formContainer}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection="column"
          height="100%"
        >
          <Typography variant="h2" color="#fff">
            Please enter the code sent to your Email
          </Typography>
          <OtpInput valueLength={6} />
          <Typography variant="p" color="#fff" alignSelf="flex-end">
            Resend OTP in{" "}
            <Typography variant="span">{getCountdown(counter)}</Typography>
          </Typography>
        </Box>
      </form>
      <Button
        sx={{
          marginTop: "30px",
          width: "150px",
          bgcolor: "#EFEFEF",
          color: "#61481C",
          fontSize: "14px",
          "&:hover": {
            bgcolor: "#EFEFEF",
          },
        }}
        variant="contained"
        onClick={() => navigate("/login")}
      >
        SUBMIT
      </Button>
    </Box>
  );
};

export default OtpPage;
