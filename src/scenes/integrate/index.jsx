import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AdminHeader from "../../components/adminComponents/Header";
import BarChart from "../../components/BarChartIntegrations";
import LineChart from "../../components/LineChartIntegrations";
import LineChart2 from "../../components/LineChartHistoricalUsage";

import ProgressBar from "../../components/ProgressBar";

import usercount from "../../assets/images/usercountgreen.png";

const Integrations = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      p="10px"
      height="90vh"
      width="auto"
      px="auto"
      sr={{ overflow: "hidden" }}
    >
      <AdminHeader />

      {/* USER COUNT */}
      <Box
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
              <img src={usercount} alt="test" />
            </Box>

            <Box display="flex" gap="10px">
              <Button
                sx={{
                  background: "#00FF19",
                  padding: "5px 20px",
                  border: "2px solid #00FF19",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#343A40",
                    border: "2px solid #00FF19",
                    color: "#00FF19",
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
                  border: "2px solid #00FF19",
                  cursor: "pointer",
                  color: "#00FF19",
                  "&:hover": {
                    background: "#00FF19",
                    padding: "5px 20px",
                    border: "2px solid #00FF19",
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
            height="248px"
            m="-30px 0px 0 7px"
            color="black"
          >
            <LineChart />
          </Box>
        </Box>
      </Box>

      {/* USER STATISTICS */}
      <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        {/* STATISTICS BAR  */}
        <Box
          backgroundColor={colors.primary[400]}
          height="393px"
          gridColumn="span 12"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // gap="150px"
            p="10px 30px"
            textAlign="center"
            // marginLeft="90px"
          >
            <Typography fontSize="25px" fontWeight="600">
              USER STATISTICS
            </Typography>

            {/* <Typography fontSize="20px" fontWeight="600" marginLeft="90px">
              2022
            </Typography> */}

            <Box display="flex" gap="20px" mr="200px">
              <Box display="flex" gap="5px">
                <Typography fontSize="15px" fontWeight="300">
                  Ordered Users
                </Typography>
                <Box backgroundColor="#CACACA" height="20px" width="20px"></Box>
                {/* <img alt="" /> */}
              </Box>

              <Box display="flex" gap="5px">
                <Typography fontSize="15px" fontWeight="300">
                  User Browse Only
                </Typography>
                <Box backgroundColor="#898886" height="20px" width="20px"></Box>
                {/* <img alt="" /> */}
              </Box>
            </Box>
          </Box>

          <Box height="380px" m="-50px -8px 0 -8px">
            <BarChart />
          </Box>
        </Box>
      </Box>

      {/* HISTORICAL USAGE */}
      <Box
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
            textAlign="center"
            p="5px 50px"
          >
            <Box>
              <Typography fontSize="20px" fontWeight="300">
                Historical Usage
              </Typography>
            </Box>

            <Box display="flex" gap="10px" marginRight="90px">
              <Button
                sx={{
                  background: "transparent",
                  width: "92px",
                  height: "29px",
                  //   padding: "2px 20px",
                  border: "2px solid white",
                  cursor: "pointer",
                  color: "white",
                  "&:hover": {
                    background: "#343A40",
                    border: "2px solid #77D1D6",
                    color: "#77D1D6",
                  },
                }}
              >
                <Typography
                  textTransform={"Capitalize"}
                  fontSize="10px"
                  fontWeight="500"
                >
                  Day
                </Typography>
              </Button>

              <Button
                sx={{
                  background: "transparent",
                  width: "92px",
                  height: "29px",
                  //   padding: "2px 20px",
                  border: "2px solid white",
                  cursor: "pointer",
                  color: "white",
                  "&:hover": {
                    background: "#343A40",
                    border: "2px solid #77D1D6",
                    color: "#77D1D6",
                  },
                }}
              >
                <Typography
                  textTransform={"Capitalize"}
                  fontSize="10px"
                  fontWeight="500"
                >
                  Week
                </Typography>
              </Button>

              <Button
                sx={{
                  background: "transparent",
                  width: "92px",
                  height: "29px",
                  //   padding: "2px 20px",
                  border: "2px solid white",
                  cursor: "pointer",
                  color: "white",
                  "&:hover": {
                    background: "#343A40",
                    border: "2px solid #77D1D6",
                    color: "#77D1D6",
                  },
                }}
              >
                <Typography
                  textTransform={"Capitalize"}
                  fontSize="10px"
                  fontWeight="500"
                >
                  Month
                </Typography>
              </Button>

              <Button
                sx={{
                  background: "transparent",
                  width: "92px",
                  height: "29px",
                  //   padding: "2px 20px",
                  border: "2px solid white",
                  cursor: "pointer",
                  color: "white",
                  "&:hover": {
                    background: "#343A40",
                    border: "2px solid #77D1D6",
                    color: "#77D1D6",
                  },
                }}
              >
                <Typography
                  textTransform={"Capitalize"}
                  fontSize="10px"
                  fontWeight="500"
                >
                  Year
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box
            position="relative"
            z-index="-9999"
            height="248px"
            m="-20px 0px 0 7px"
            color="black"
          >
            <LineChart2 />
          </Box>
        </Box>
      </Box>

      {/* WEEKLY PROGRESS BAR */}
      <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        <Box
          backgroundColor={colors.primary[400]}
          height="537px"
          gridColumn="span 12"
        >
          <Box>
            <Typography
              textAlign="center"
              textTransform="uppercase"
              fontSize="30px"
              fontWeight="400"
            >
              Weekly Progress Bar
            </Typography>
          </Box>

          <Box>
            <ProgressBar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Integrations;
