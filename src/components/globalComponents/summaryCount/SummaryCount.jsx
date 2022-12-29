import React from "react";
import { Box, Typography } from "@mui/material";

const SummaryData = ({ item }) => {
  const { title, icon, number, color, bgColor } = item;

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
      mb="20px"
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
        <Typography variant="p">{title}</Typography>
        <Typography variant="h6" fontWeight={700}>
          {number}
        </Typography>
      </Box>
    </Box>
  );
};

const SummaryCount = ({ data }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      height={"50px"}
      mb={"10px"}
    >
      {data.map((item, index) => (
        <SummaryData key={index} item={item} />
      ))}
    </Box>
  );
};

export default SummaryCount;
