import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { withStyles } from "@mui/styles";
import { tokens } from "../../theme";
import AdminHeader from "../../components/adminComponents/Header";
import PieChart from "../../components/PieChartCPUTraffic";
import BarChart from "../../components/BarChartCPUTraffic";
import LineChart from "../../components/LineChartCPUTraffic";

import check from "../../assets/images/check.png";
import exclamation from "../../assets/images/exclamation.png";
import folder from "../../assets/images/folder.png";
import checkmark from "../../assets/images/checkmark.png";
import receivedbox from "../../assets/images/receivedbox.png";
import sentbox from "../../assets/images/sentbox.png";
import usercount from "../../assets/images/usercount.png";
import opt1 from "../../assets/images/opt1.png";
import opt2 from "../../assets/images/opt2.png";

const CPU = () => {
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

      {/* 2ND ROW DISTRIBUTION OF NETWORK DEVICES HIGHEST ALERT STATUS */}
      <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        {/* NETWORK DEVICES ACTIVE AND CRITICAL NETWORK ALERTS */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="10px"
          gridColumn="span 4"
        >
          <Box backgroundColor={colors.primary[400]} height="201px">
            <Typography p={2}>You have</Typography>

            <Box textAlign="center">
              <Typography fontSize="50px" fontWeight="900">
                26
              </Typography>
            </Box>

            <Box textAlign="center">
              <Typography fontSize="20px" fontWeight="300">
                Network Devices Active
              </Typography>
            </Box>
          </Box>
          <Box backgroundColor={colors.primary[400]} height="201px">
            <Typography p={2}>All Critical Network Alerts</Typography>

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

        {/* DISTRIBUTION OF NETWORK DEVICES */}
        <Box
          backgroundColor={colors.primary[400]}
          height="410px"
          gridColumn="span 4"
          // position="relative"
        >
          <Typography textAlign="center" mt="20px">
            Distribution of Network Devices
          </Typography>
          <PieChart />
          <Box
          // borderBottom="1px white solid"
          // width="400px"
          // position="absolute"
          // top="390px"
          // right="180px"
          ></Box>
        </Box>

        {/* HIGHEST ALERT STATUS BY DEVICE TYPE */}
        <Box
          backgroundColor={colors.primary[400]}
          overflow="auto"
          height="410px"
          gridColumn="span 4"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Highest Alert Status by Device Type
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
            backgroundColor="#E6B325"
            borderRadius="5px"
          >
            <Box display="flex" gap="10px" alignItems="center">
              <Box marginLeft="10px">
                <img src={exclamation} alt="" />
                <img src={folder} alt="" style={{ marginLeft: "8px" }} />
              </Box>
              <Box>
                <Typography color="white" variant="h5" fontWeight="600">
                  Cisco ASA
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
            backgroundColor="#E6B325"
            borderRadius="5px"
          >
            <Box display="flex" gap="10px" alignItems="center">
              <Box marginLeft="10px">
                <img src={exclamation} alt="" />
                <img src={folder} alt="" style={{ marginLeft: "8px" }} />
              </Box>
              <Box>
                <Typography color="white" variant="h5" fontWeight="600">
                  Cisco Routers
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
            backgroundColor="#40E625"
            borderRadius="5px"
          >
            <Box display="flex" gap="10px" alignItems="center">
              <Box marginLeft="10px">
                <img src={checkmark} alt="" />
                <img src={folder} alt="" style={{ marginLeft: "8px" }} />
              </Box>
              <Box>
                <Typography color="white" variant="h5" fontWeight="600">
                  Bil-Isan
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
            backgroundColor="#40E625"
            borderRadius="5px"
          >
            <Box display="flex" gap="10px" alignItems="center">
              <Box marginLeft="10px">
                <img src={checkmark} alt="" />
                <img src={folder} alt="" style={{ marginLeft: "8px" }} />
              </Box>
              <Box>
                <Typography color="white" variant="h5" fontWeight="600">
                  Bolad
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
            backgroundColor="#40E625"
            borderRadius="5px"
          >
            <Box display="flex" gap="10px" alignItems="center">
              <Box marginLeft="10px">
                <img src={checkmark} alt="" />
                <img src={folder} alt="" style={{ marginLeft: "8px" }} />
              </Box>
              <Box>
                <Typography color="white" variant="h5" fontWeight="600">
                  Danao
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
            backgroundColor="#40E625"
            borderRadius="5px"
          >
            <Box display="flex" gap="10px" alignItems="center">
              <Box marginLeft="10px">
                <img src={checkmark} alt="" />
                <img src={folder} alt="" style={{ marginLeft: "8px" }} />
              </Box>
              <Box>
                <Typography color="white" variant="h5" fontWeight="600">
                  Dolja
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
            backgroundColor="#40E625"
            borderRadius="5px"
          >
            <Box display="flex" gap="10px" alignItems="center">
              <Box marginLeft="10px">
                <img src={checkmark} alt="" />
                <img src={folder} alt="" style={{ marginLeft: "8px" }} />
              </Box>
              <Box>
                <Typography color="white" variant="h5" fontWeight="600">
                  Libaong
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
            backgroundColor="#40E625"
            borderRadius="5px"
          >
            <Box display="flex" gap="10px" alignItems="center">
              <Box marginLeft="10px">
                <img src={checkmark} alt="" />
                <img src={folder} alt="" style={{ marginLeft: "8px" }} />
              </Box>
              <Box>
                <Typography color="white" variant="h5" fontWeight="600">
                  Loac
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 3RD ROW STATISTICS AND TOTAL BANDWIDTH */}
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
              STATISTICS
            </Typography>

            <Typography fontSize="20px" fontWeight="600" marginLeft="90px">
              2022
            </Typography>

            <Box display="flex" gap="20px">
              <Box display="flex" gap="5px">
                <Typography fontSize="10px">Received Request</Typography>
                <img src={receivedbox} alt="" />
              </Box>

              <Box display="flex" gap="5px">
                <Typography fontSize="10px">Sent Request</Typography>
                <img src={sentbox} alt="" />
              </Box>
            </Box>
          </Box>

          <Box height="230px" m="-55px -120px 0 -30px">
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

      {/* 4TH ROW LINE CHART */}
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

export default CPU;
