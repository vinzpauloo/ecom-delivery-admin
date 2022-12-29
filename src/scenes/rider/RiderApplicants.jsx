import { Box, Typography } from "@mui/material";
import React from "react";
import Applicant from "../../components/riderComponents/applicant/Applicant";
import Statistics from "../../components/globalComponents/statistics/Statistics";
import SummaryCount from "../../components/globalComponents/summaryCount/SummaryCount";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";

const summaryCount = [
  {
    icon: <img src={img1} style={{ height: "25px" }} alt="" />,
    title: "New Registered Riders",
    number: "26",
    bgColor: "#01CDFF",
  },
  {
    icon: <img src={img2} style={{ height: "25px" }} alt="" />,
    title: "Total Riders",
    number: "86",
    bgColor: "#BF9742",
  },
  {
    icon: <img src={img3} style={{ height: "25px" }} alt="" />,
    title: "Total Delivered Orders",
    number: "100 as of 12nn (12-19-2022)",
    bgColor: "#A100FC",
  },
  {
    icon: <img src={img4} style={{ height: "25px" }} alt="" />,
    title: "Total Cancelled Orders",
    number: "30 as of 12nn (12-19-2022)",
    bgColor: "#F75F86",
  },
];

const RiderApplicants = () => {
  return (
    <Box p="20px" bgcolor="#454d55">
      <Statistics />
      <Box p="20px" bgcolor="#151C26">
        <SummaryCount data={summaryCount} />
        <Typography
          variant="h3"
          color="#FFF"
          fontWeight={600}
          textAlign="center"
          mb="10px"
        >
          DELIVERY RIDER APPLICANTS
        </Typography>
        <Box bgcolor="#151c26" maxHeight="655px" overflow="auto">
          {/* the data is need in a array form */}
          <Applicant data="rider" />
        </Box>
      </Box>
    </Box>
  );
};

export default RiderApplicants;
