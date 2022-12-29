import React from "react";
import { Box, Typography } from "@mui/material";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";

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

const SummaryData = (props) => {
  const { title, icon, number, color, bgColor } = props.item;

  return (
    <Box
      gridColumn="span 3"
      backgroundColor={bgColor}
      display="flex"
      alignItems="center"
      flexDirection={"row-reverse"}
      justifyContent={"space-between"}
      borderRadius={"5px"}
      height={"50px"}
      p={"5px"}
    >
      <Box
        bgcolor={color}
        height={"40px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"5px"}
        mr={"5px"}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" fontWeight={700}>
          {number}
        </Typography>
      </Box>
    </Box>
  );
};

const SummaryCount = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      height={"50px"}
      mb={"10px"}
    >
      {summaryCount.map((item, index) => (
        <SummaryData key={index} item={item} />
      ))}
    </Box>
  );
};

export default SummaryCount;
