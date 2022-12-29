import { Box, Typography } from "@mui/material";
import React from "react";
import Applicant from "../../components/restuarantComponents/applicant/Applicant";
import Statistics from "../../components/globalComponents/statistics/Statistics";

const sampleData = [1, 2, 3, 4, 5, 6, 7, 8];

const RestaurantApplicants = () => {
  return (
    <Box p={"20px"} bgcolor={"#454d55"}>
      <Statistics />
      <Typography
        variant="h3"
        color="#FFF"
        fontWeight={600}
        textAlign="center"
        mb="10px"
      >
        RESTAURANT APPLICANTS
      </Typography>
      <Box bgcolor="#151c26" p="5px 15px" maxHeight="755px" overflow="auto">
        {/* the data is need in a array form */}
        <Applicant />
      </Box>
    </Box>
  );
};

export default RestaurantApplicants;
