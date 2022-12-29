import React from "react";
import { Box, Typography } from "@mui/material";
import img1 from "../../../assets/images/img01.png";
import img2 from "../../../assets/images/img02.png";
import img3 from "../../../assets/images/img03.png";
import img4 from "../../../assets/images/img04.png";
import img5 from "../../../assets/images/img05.png";
import img6 from "../../../assets/images/img06.png";

const summaryCount = [
  {
    icon: (
      <>
        <img src={img2} style={{ height: "25px", margin: "0 5px" }} alt="" />
        <img src={img3} style={{ height: "25px", margin: "0 5px" }} alt="" />
        <img src={img1} style={{ height: "25px", margin: "0 5px" }} alt="" />
      </>
    ),
    title: "Social Media | Opt-in Users",
    number: "11,260 / 1,986",
    bgColor: "#01CDFF",
  },
  {
    icon: <img src={img4} style={{ height: "25px" }} alt="" />,
    title: "Page Likes",
    number: "76",
    bgColor: "#BF9742",
  },
  {
    icon: <img src={img5} style={{ height: "25px" }} alt="" />,
    title: "Sales Update",
    number: "89",
    bgColor: "#A100FC",
  },
  {
    icon: <img src={img6} style={{ height: "25px" }} alt="" />,
    title: "Overall users",
    number: "133",
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
