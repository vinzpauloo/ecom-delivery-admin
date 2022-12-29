import React from "react";
import { Box, Typography } from "@mui/material";
import cpu from "../../../assets/images/cputraffic.png";
import like from "../../../assets/images/pagelikes.png";
import overall from "../../../assets/images/overallusers.png";
import sales from "../../../assets/images/salesupdate.png";

const statisticsData = [
  {
    icon: <img src={cpu} style={{ width: "25px", height: "25px" }} alt="" />,
    title: "CPU Traffic",
    number: "10%",
    color: "#009EFF",
  },
  {
    icon: <img src={like} style={{ width: "25px", height: "25px" }} alt="" />,
    title: "Page Likes",
    number: "50,126",
    color: "#FB2576",
  },
  {
    icon: (
      <img src={overall} style={{ width: "25px", height: "25px" }} alt="" />
    ),
    title: "Sales Update",
    number: "760",
    color: "#E8AA42",
  },
  {
    icon: <img src={sales} style={{ width: "25px", height: "25px" }} alt="" />,
    title: "Overall users",
    number: "26,000",
    color: "#3EC70B",
  },
];

const StatisticsData = (props) => {
  const { title, icon, number, color } = props.item;

  return (
    <Box
      gridColumn="span 3"
      backgroundColor={"#343a40"}
      display="flex"
      alignItems="center"
      justifyContent={"flex-start"}
      borderRadius={"5px"}
      height={"50px"}
      p={"5px"}
    >
      <Box
        bgcolor={color}
        height={"40px"}
        width={"40px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"5px"}
        mr={"5px"}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{number}</Typography>
      </Box>
    </Box>
  );
};

const Statistics = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      height={"50px"}
      mb={"20px"}
    >
      {statisticsData.map((item, index) => (
        <StatisticsData key={index} item={item} />
      ))}
    </Box>
  );
};

export default Statistics;
