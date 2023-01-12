import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate, Link } from "react-router-dom";

import cpuTraffic from "../../assets/images/cputraffic.png";
import pageLikes from "../../assets/images/menu-settings.png";
import salesUpdate from "../../assets/images/salesupdate.png";
import overallUsers from "../../assets/images/overallusers.png";
import { useSystemInfo } from "../../hooks/useSystemInfo";
import {useBalance} from "../../hooks/useBalance";

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { getSystemInfo } = useSystemInfo();
  const [cpu, setCpu] = useState(0);

  const {getBalance} = useBalance();
  const [balance, setBalance] = useState(0);
  const [remainText, setRemainText] = useState(0);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/cpu");
  };

  const loadSytemInfoCPU = async () => {
    const response = await getSystemInfo({ value: "cpu" });
    const response2 = await getSystemInfo();
    console.log(response2);
    console.log("response", response);
    setCpu(response.cpu);
  };

const loadBalance = async () => {
    const response = await getBalance();
    console.log(response);
    setBalance(response.balance);
    setRemainText(response.remaining_text);
}

  useEffect(() => {
    loadSytemInfoCPU();
    loadBalance();
  }, []);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="40px"
      gap="20px"
      marginBottom="0px"
      marginTop="2px"
    >
      <Box
        gridColumn="span 4"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        gap="10px"
        padding="10px"
        // sx={{ cursor: "pointer" }}
        // onClick={handleClick}
      >
        <Box
          style={{
            background: "#009EFF",
            padding: "6px",
            height: "35px",
            width: "35px",
            borderRadius: "5px",
          }}
        >
          <img src={cpuTraffic} alt="" style={{ width: "25px" }} />
        </Box>
        <Box>
          <p style={{ fontSize: "9px" }}>CPU Traffic</p>
          <p
            style={{
              fontSize: "9px",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            {cpu * 100} %
          </p>
        </Box>
      </Box>
      <Box
        gridColumn="span 4"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        gap="10px"
        padding="10px"

      >
        <Box
          style={{
            background: "#FB2576",
            padding: "5px",
            height: "35px",
            width: "35px",
            borderRadius: "5px",
          }}
        >
          <img src={pageLikes} alt="" style={{ width: "25px" }} />
        </Box>
        <Box>
          <p style={{ fontSize: "9px" }}>Current Balance: {balance}</p>
          <p
            style={{
              fontSize: "9px",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            Remaining SMS Text: {remainText}
          </p>
        </Box>
      </Box>
      {/* <Box
        gridColumn="span 4"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        gap="10px"
        padding="10px"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(`/admin/salesupdate`)}
      >
        <Box
          style={{
            background: "#E8AA42",
            padding: "5px",
            height: "35px",
            width: "35px",
            borderRadius: "5px",
          }}
        >
          <img src={salesUpdate} alt="" style={{ width: "25px" }} />
        </Box>
        <Box>
          <p style={{ fontSize: "9px" }}>Sales Update</p>
          <p
            style={{
              fontSize: "9px",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          ></p>
        </Box>
      </Box> */}
      <Box
        gridColumn="span 4"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        gap="10px"
        padding="10px"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(`/admin/overallusers`)}
      >
        <Box
          style={{
            background: "#3EC70B",
            padding: "5px",
            height: "35px",
            width: "35px",
            borderRadius: "5px",
          }}
        >
          <img src={overallUsers} alt="" style={{ width: "25px" }} />
        </Box>
        <Box>
          <p style={{ fontSize: "9px" }}>Overall Orders</p>
          <p
            style={{
              fontSize: "9px",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            {/* 26,000 */}
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
