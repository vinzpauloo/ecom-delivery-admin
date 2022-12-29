import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CustomerHeader from "../../components/adminComponents/Header";
import Waffle from "../../components/WaffleOverallUsers";
import PieChart from "../../components/PieChartCustomerDashboard";
import Stream from "../../components/StreamCustomerDashboard";

import onlineicon from "../../assets/images/deliveredicon.png";
import fordeliveryicon from "../../assets/images/fordeliveryicon.png";
import canceledicon from "../../assets/images/canceledicon.png";
import orderingicon from "../../assets/images/orderingicon.png";
import guestusersicon from "../../assets/images/guestusersicon.png";
import newregisteredusers from "../../assets/images/newregisteredusers.png";
import totalusers from "../../assets/images/totalusers.png";
import totaluserordered from "../../assets/images/totaluserordered.png";
import totalcanceledorders from "../../assets/images/totalcanceledorders.png";

import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";
import "react-circular-progressbar/dist/styles.css";

const CustomerDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const percentage = 66;
  return (
    <Box
      p="8px"
      height="90vh"
      width="auto"
      px="auto"
      sr={{ overflow: "hidden" }}
    >
      <CustomerHeader />

      <Box
        mt="5px"
        backgroundColor="#151C26"
        height="88vh"
        width="auto"
        position="relative"
      >
        <Box>
          <Typography
            fontSize="25px"
            fontWeight="600"
            textAlign="center"
            p="4px 0 0 0"
          >
            USER AVAILABILITY DASHBOARD
          </Typography>
        </Box>

        {/* 2ND ROW */}
        <Box
          marginTop="0px"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap="10px"
          p={1}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            gap="10px"
            gridColumn="span 6"
          >
            <Box backgroundColor={colors.primary[400]} height="201px">
              <Box>
                <Typography
                  fontWeight="300"
                  fontSize="15px"
                  textAlign="center"
                  mt="5px"
                >
                  Current Status of Netflow Devices
                </Typography>
              </Box>

              <Box height="201px" m="-20px 100px 0 -20px" color="black">
                <Waffle />
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            gap="10px"
            gridColumn="span 6"
          >
            <Box backgroundColor={colors.primary[400]} height="201px">
              <Box>
                <Typography
                  fontWeight="300"
                  fontSize="15px"
                  textAlign="center"
                  mt="5px"
                >
                  Current Status of Interfaces of all Netflow Devices
                </Typography>
              </Box>

              <Box height="201px" m="-20px 100px 0 -20px" color="black">
                <Waffle />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 3RD ROW */}
        <Box
          marginTop="4px"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap="10px"
        >
          <Box gridColumn="span 12" mt="4px">
            <Box display="flex" justifyContent="center" gap="100px">
              <Box display="flex" alignItems="center" gap="7px">
                <img src={onlineicon} alt="" />
                <Typography fontSize="15px" fontWeight="300">
                  Online
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="7px">
                <img src={fordeliveryicon} alt="" />
                <Typography fontSize="15px" fontWeight="300">
                  For Delivery
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="7px">
                <img src={canceledicon} alt="" />
                <Typography fontSize="15px" fontWeight="300">
                  Canceled
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="7px">
                <img src={orderingicon} alt="" />
                <Typography fontSize="15px" fontWeight="300">
                  Null
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="7px">
                <img src={guestusersicon} alt="" />
                <Typography fontSize="15px" fontWeight="300">
                  Guest Users
                </Typography>
              </Box>
            </Box>

            <Box display="flex" justifyContent="center" gap="10px" mt="25px">
              <Box
                backgroundColor="#01CDFF"
                width="400px"
                height="54px"
                display="flex"
                //   justifyContent="center"
                alignItems="center"
                p={1}
                borderRadius="5px"
                justifyContent="space-between"
              >
                <Box>
                  <Typography fontSize="15px" fontWeight="300">
                    New Registered Users
                  </Typography>
                  <Typography fontSize="18px" fontWeight="700">
                    28
                  </Typography>
                </Box>

                <Box display="flex" gap="5px">
                  <img src={newregisteredusers} alt="" />
                  <img alt="" />
                  <img alt="" />
                </Box>
              </Box>
              <Box
                backgroundColor="#BF9742"
                width="400px"
                height="54px"
                display="flex"
                //   justifyContent="center"
                alignItems="center"
                p={1}
                borderRadius="5px"
                justifyContent="space-between"
              >
                <Box>
                  <Typography fontSize="15px" fontWeight="300">
                    Total Users
                  </Typography>
                  <Typography fontSize="18px" fontWeight="700">
                    86
                  </Typography>
                </Box>

                <Box display="flex" gap="5px" mr="5px">
                  <img src={totalusers} alt="" />
                </Box>
              </Box>
              <Box
                backgroundColor="#A100FC"
                width="400px"
                height="54px"
                display="flex"
                //   justifyContent="center"
                alignItems="center"
                p={1}
                borderRadius="5px"
                justifyContent="space-between"
              >
                <Box>
                  <Typography fontSize="15px" fontWeight="300">
                    Total User Ordered
                  </Typography>
                  <Typography fontSize="18px" fontWeight="700">
                    100 as of 12nn (12-19-2022)
                  </Typography>
                </Box>

                <Box display="flex" gap="5px" mr="5px">
                  <img src={totaluserordered} alt="" />
                </Box>
              </Box>
              <Box
                backgroundColor="#F75F86"
                width="400px"
                height="54px"
                display="flex"
                //   justifyContent="center"
                alignItems="center"
                p={1}
                borderRadius="5px"
                justifyContent="space-between"
              >
                <Box>
                  <Typography fontSize="15px" fontWeight="300">
                    Total Canceled Orders
                  </Typography>
                  <Typography fontSize="18px" fontWeight="700">
                    30 as of 12nn (12-19-2022)
                  </Typography>
                </Box>

                <Box display="flex" gap="5px" mr="5px">
                  <img src={totalcanceledorders} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 4TH ROW */}
        <Box
          marginTop="10px"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap="10px"
        >
          <Box
            // backgroundColor={colors.primary[400]}
            // height="250px"
            gridColumn="span 12"
          >
            <Box
              display="flex"
              gap="65px"
              justifyContent="space-around"
              alignItems="center"
              // position="absolute"
            >
              {/* Order Count Wave */}
              <Box border="1px solid white" height="185px" mb="20px">
                <Box>
                  <Typography fontSize="25px" fontWeight="300" p={1}>
                    Order Count Wave
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  borderTop="1px solid white"
                >
                  <Typography fontSize="55px" fontWeight="900">
                    150
                  </Typography>
                  <Typography fontSize="20px" fontWeight="275">
                    8th wave of orders
                  </Typography>
                </Box>
              </Box>

              {/* Pie Chart */}
              <Box sx={{ width: 160, height: 400 }} m="-190px 0 0 0">
                <PieChart />
              </Box>

              {/* 1st Progress Bar */}
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="0px"
              >
                <Box sx={{ width: 150, height: 160 }}>
                  <ProgressProvider valueStart={0} valueEnd={89}>
                    {(value) => (
                      <CircularProgressbarWithChildren
                        value={value}
                        styles={{
                          // Customize the root svg element
                          root: {},
                          // Customize the path, i.e. the "completed progress"
                          path: {
                            // Path color
                            stroke: `#009EFF`,
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "butt",
                            // Customize transition animation
                            transition: "stroke-dashoffset 2s ease 0s",
                            // Rotate the path
                            transform: "rotate(0.15turn)",
                            transformOrigin: "center center",
                          },
                          // Customize the circle behind the path, i.e. the "total progress"
                          trail: {
                            // Trail color
                            stroke: "#d6d6d6",
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "butt",
                            // Rotate the trail
                            transform: "rotate(0.25turn)",
                            transformOrigin: "center center",
                          },
                          // Customize the text
                          text: {
                            // Text color
                            fill: "#f88",
                            // Text size
                            fontSize: "16px",
                          },
                          // Customize background - only used when the `background` prop is true
                          background: {
                            fill: "#3e98c7",
                          },
                        }}
                      >
                        <div style={{ fontSize: "30px", marginTop: -5 }}>
                          <strong>89%</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                    )}
                  </ProgressProvider>
                </Box>
                <Box>
                  <Typography>₱ 53K</Typography>
                </Box>
              </Box>

              {/* 2nd Progress Bar */}
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="0px"
              >
                <Box sx={{ width: 150, height: 160 }}>
                  <ProgressProvider valueStart={0} valueEnd={64}>
                    {(value) => (
                      <CircularProgressbarWithChildren
                        value={value}
                        styles={{
                          // Customize the root svg element
                          root: {},
                          // Customize the path, i.e. the "completed progress"
                          path: {
                            // Path color
                            stroke: `#7F167F`,
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "butt",
                            // Customize transition animation
                            transition: "stroke-dashoffset 2s ease 0s",
                            // Rotate the path
                            transform: "rotate(0.15turn)",
                            transformOrigin: "center center",
                          },
                          // Customize the circle behind the path, i.e. the "total progress"
                          trail: {
                            // Trail color
                            stroke: "#d6d6d6",
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "butt",
                            // Rotate the trail
                            transform: "rotate(0.25turn)",
                            transformOrigin: "center center",
                          },
                          // Customize the text
                          text: {
                            // Text color
                            fill: "#7F167F",
                            // Text size
                            fontSize: "16px",
                          },
                          // Customize background - only used when the `background` prop is true
                          background: {
                            fill: "#7F167F",
                          },
                        }}
                      >
                        <div style={{ fontSize: "30px", marginTop: -5 }}>
                          <strong>64%</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                    )}
                  </ProgressProvider>
                </Box>
                <Box>
                  <Typography>₱ 45K</Typography>
                </Box>
              </Box>

              {/* 3rd Progress Bar */}
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="0px"
              >
                <Box sx={{ width: 150, height: 160 }}>
                  <ProgressProvider valueStart={0} valueEnd={47}>
                    {(value) => (
                      <CircularProgressbarWithChildren
                        value={value}
                        styles={{
                          // Customize the root svg element
                          root: {},
                          // Customize the path, i.e. the "completed progress"
                          path: {
                            // Path color
                            stroke: `#DC3535`,
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "butt",
                            // Customize transition animation
                            transition: "stroke-dashoffset 2s ease 0s",
                            // Rotate the path
                            transform: "rotate(0.15turn)",
                            transformOrigin: "center center",
                          },
                          // Customize the circle behind the path, i.e. the "total progress"
                          trail: {
                            // Trail color
                            stroke: "#d6d6d6",
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "butt",
                            // Rotate the trail
                            transform: "rotate(0.25turn)",
                            transformOrigin: "center center",
                          },
                          // Customize the text
                          text: {
                            // Text color
                            fill: "#DC3535",
                            // Text size
                            fontSize: "16px",
                          },
                          // Customize background - only used when the `background` prop is true
                          background: {
                            fill: "#3e98c7",
                          },
                        }}
                      >
                        <div style={{ fontSize: "30px", marginTop: -5 }}>
                          <strong>47%</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                    )}
                  </ProgressProvider>
                </Box>
                <Box>
                  <Typography>₱ 22K</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 5TH ROW */}
        <Box
          marginTop="0px"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap="10px"
        >
          <Box
            // backgroundColor={colors.primary[400]}
            height="195px"
            gridColumn="span 12"
          >
            <Typography textAlign="center" fontSize="30px" fontWeight="300">
              Multifunction Graph
            </Typography>
            <Stream />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerDashboard;
