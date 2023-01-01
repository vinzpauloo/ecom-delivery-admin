import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { withStyles } from "@mui/styles";
import { tokens } from "../../theme";
import AdminHeader from "../../components/adminComponents/Header";
import BarChart from "../../components/BarChartSalesUpdate";
import LineChart from "../../components/LineChartSalesUpdate";

import check from "../../assets/images/check.png";
import usercount from "../../assets/images/usercount.png";
import sold from "../../assets/images/sold.png";
import pickup from "../../assets/images/pickup.png";

const SalesUpdate = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      p="8px"
      height="90vh"
      width="auto"
      px="auto"
      sr={{ overflow: "hidden" }}
    >
      {/* CPU TRAFFIC PAGE LIKES SALES UPDATE OVERALL USERS */}
      <AdminHeader />

      {/* 2ND ROW */}
      <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="10px"
          gridColumn="span 12"
        >
          <Box
            backgroundColor={colors.primary[400]}
            height="201px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box>
              <Typography fontWeight="300" fontSize="15px">
                You have 28 new orders as of 12:05pm December 19, 2022
              </Typography>
              <Typography fontWeight="900" fontSize="50px">
                28
              </Typography>
              <Typography fontWeight="300" fontSize="20px">
                INSTAGRAM | FACEBOOK | TWITTER | YOUTUBE
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="10px"
          gridColumn="span 6"
        >
          <Box
            backgroundColor={colors.primary[400]}
            height="201px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box>
              <Typography fontSize="15px" fontWeight="300" mb="10px">
                Refresh Network
              </Typography>

              <img src={check} alt="" width="80px" />

              <Typography fontSize="20px" fontWeight="300">
                No Alerts
              </Typography>
            </Box>
          </Box>
        </Box> */}
      </Box>

      {/* 3RD ROW */}
      {/* <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        <Box
          backgroundColor={colors.primary[400]}
          height="393px"
          gridColumn="span 12"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="10px 30px"
            textAlign="center"
          >
            <Typography fontSize="25px" fontWeight="600">
              SALES STATISTICS
            </Typography>

            <Box display="flex" gap="20px" mr="200px">
              <Box display="flex" gap="5px">
                <Typography fontSize="15px" fontWeight="300">
                  Sold (Delivered Orders)
                </Typography>
                <img src={sold} alt="" />
              </Box>

              <Box display="flex" gap="5px">
                <Typography fontSize="15px" fontWeight="300">
                  Pick up Orders
                </Typography>
                <img src={pickup} alt="" />
              </Box>
            </Box>
          </Box>

          <Box height="380px" m="-50px -8px 0 -8px">
            <BarChart />
          </Box>
        </Box>
      </Box> */}

      {/* 4TH ROW */}
      {/* <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        <Box
          backgroundColor={colors.primary[400]}
          height="280px"
          gridColumn="span 12"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p="0 30px"
          >
            <Box>
              <img src={usercount} alt="" />
            </Box>

            <Box display="flex" gap="10px">
              <Button
                sx={{
                  background: "#77D1D6",
                  padding: "5px 20px",
                  border: "2px solid #77D1D6",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#343A40",
                    border: "2px solid #77D1D6",
                    color: "#77D1D6",
                  },
                }}
              >
                <Typography
                  textTransform={"Capitalize"}
                  fontSize="20px"
                  fontWeight="600"
                >
                  OPT-1
                </Typography>
              </Button>
              <Button
                backgroundColor={colors.primary[400]}
                sx={{
                  padding: "5px 20px",
                  border: "2px solid #77D1D6",
                  cursor: "pointer",
                  color: "#77D1D6",
                  "&:hover": {
                    background: "#77D1D6",
                    padding: "5px 20px",
                    border: "2px solid #77D1D6",
                    cursor: "pointer",
                    color: "black",
                  },
                }}
              >
                <Typography
                  textTransform={"Capitalize"}
                  fontSize="20px"
                  fontWeight="600"
                >
                  OPT-2
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box
            position="relative"
            z-index="-9999"
            height="248px"
            m="-30px 0px 0 7px"
            color="black"
          >
            <LineChart />
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default SalesUpdate;
