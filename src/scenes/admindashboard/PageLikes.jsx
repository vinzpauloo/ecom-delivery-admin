import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { withStyles } from "@mui/styles";
import { tokens } from "../../theme";
import AdminHeader from "../../components/adminComponents/Header";
import PieChart from "../../components/PieChartPageLikes";
import BarChart from "../../components/BarChartPageLikes";
import LineChart from "../../components/LineChartPageLikes";

import check from "../../assets/images/check.png";
import likesbox from "../../assets/images/likesbox.png";
import reactionsbox from "../../assets/images/reactionsbox.png";
import usercount from "../../assets/images/usercount.png";

const PageLikes = () => {
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
          gridColumn="span 6"
        >
          <Box backgroundColor={colors.primary[400]} height="201px">
            <Typography p={2} textAlign="center" mt="5px">
              You have 13 new followers on social media
            </Typography>

            <Box textAlign="center">
              <Typography fontSize="50px" fontWeight="900">
                13
              </Typography>
            </Box>

            <Box textAlign="center">
              <Typography fontSize="20px" fontWeight="300">
                INSTAGRAM | FACEBOOK | TWITTER | YOUTUBE
              </Typography>
            </Box>
          </Box>
          <Box backgroundColor={colors.primary[400]} height="201px">
            <Typography p={2} textAlign="center" mt="5px">
              All Critical Network Alerts
            </Typography>

            <Box textAlign="center">
              <Typography fontSize="50px" fontWeight="900">
                <img src={check} alt="" width="70px" />
              </Typography>
            </Box>

            <Box textAlign="center">
              <Typography fontSize="20px" fontWeight="300">
                No Alerts
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          backgroundColor={colors.primary[400]}
          height="410px"
          gridColumn="span 6"
        >
          <Typography textAlign="center" mt="20px">
            Interactions in marketing and advertisements
          </Typography>
          <PieChart />
        </Box>
      </Box>

      {/* 3RD ROW */}
      <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        {/* STATISTICS BAR  */}
        <Box
          backgroundColor={colors.primary[400]}
          height="210px"
          gridColumn="span 7"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // gap="150px"
            p={1}
            textAlign="center"
            // marginLeft="90px"
          >
            <Typography fontSize="15px" fontWeight="600">
              SOCIAL MEDIA STATISTICS
            </Typography>

            {/* <Typography fontSize="20px" fontWeight="600" marginLeft="90px">
              2022
            </Typography> */}

            <Box display="flex" gap="20px">
              <Box display="flex" gap="5px">
                <Typography fontSize="10px">Received Request</Typography>
                <img src={likesbox} alt="" />
              </Box>

              <Box display="flex" gap="5px">
                <Typography fontSize="10px">Sent Request</Typography>
                <img src={reactionsbox} alt="" />
              </Box>
            </Box>
          </Box>

          <Box height="230px" m="-50px -120px 0 -30px">
            <BarChart />
          </Box>
        </Box>

        {/* TOTAL BANDWIDTH */}
        <Box
          backgroundColor={colors.primary[400]}
          height="210px"
          gridColumn="span 5"
        >
          <Box p={1}>
            <Typography fontSize="15px" fontWeight="600">
              Total Bandwidth across all Network Devices
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            gap="20px"
          >
            <Box
              backgroundColor="#009EFF"
              textAlign="center"
              sx={{ width: "270px", height: "143px" }}
            >
              <Box mt="-10px">
                <Typography fontSize="80px" fontWeight="900">
                  150
                </Typography>
                <Typography fontSize="15px" fontWeight="600">
                  Outbound Mbps
                </Typography>
              </Box>
            </Box>
            <Box
              backgroundColor="#FF5555"
              textAlign="center"
              sx={{ width: "270px", height: "143px" }}
            >
              <Box mt="-10px">
                <Typography fontSize="80px" fontWeight="900">
                  186
                </Typography>
                <Typography fontSize="15px" fontWeight="600">
                  Inbound Mbps
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 4TH ROW */}
      <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        <Box
          backgroundColor={colors.primary[400]}
          height="250px"
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
              {/* <Box sx={{ cursor: "pointer" }}>
                <img src={opt1} alt="" />
              </Box>
              <img src={opt2} alt="" /> */}
            </Box>
          </Box>

          <Box
            position="relative"
            z-index="-9999"
            height="220px"
            m="-20px 0 0 90px"
            color="black"
          >
            <LineChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageLikes;
