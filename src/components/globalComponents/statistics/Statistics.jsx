import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import cpuImg from "../../../assets/images/cputraffic.png";
import likeImg from "../../../assets/images/pagelikes.png";
import overallImg from "../../../assets/images/overallusers.png";
import salesImg from "../../../assets/images/salesupdate.png";
import { useSystemInfo } from "../../../hooks/useSystemInfo";
import { useOverallUser } from "../../../hooks/useOverallUser";

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
      p={"8px"}
    >
      <Box
        bgcolor={color}
        height={"35px"}
        width={"35px"}
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
        <Typography variant="span">{number}</Typography>
      </Box>
    </Box>
  );
};

const Statistics = () => {
  const [cpu, setCpu] = useState(0);
  const [allUsers, getAllUsers] = useState(0);
  const { getSystemInfo } = useSystemInfo();
  const { getCountAllUser } = useOverallUser();

  const loadSytemInfoCPU = async () => {
    const response = await getSystemInfo({ process: "cpu" });
    console.log("response", response);
    setCpu(response.cpu);
  };

  const loadCountAllUsers = async () => {
    const response = await getCountAllUser({ count: 10 });
    console.log("responseCountAllUsers", response);
    getAllUsers(response);
  };

  useEffect(() => {
    loadSytemInfoCPU();
    loadCountAllUsers();
  }, []);
  const statisticsData = [
    {
      icon: (
        <img src={cpuImg} style={{ width: "25px", height: "25px" }} alt="" />
      ),
      title: "CPU Traffic",
      number: `${cpu.toFixed(5) * 100} %`,
      color: "#009EFF",
    },
    {
      icon: (
        <img src={likeImg} style={{ width: "25px", height: "25px" }} alt="" />
      ),
      title: "Page Likes",
      number: "50,126",
      color: "#FB2576",
    },
    {
      icon: (
        <img
          src={overallImg}
          style={{ width: "25px", height: "25px" }}
          alt=""
        />
      ),
      title: "Sales Update",
      number: "760",
      color: "#E8AA42",
    },
    {
      icon: (
        <img src={salesImg} style={{ width: "25px", height: "25px" }} alt="" />
      ),
      title: "Overall users",
      number: allUsers,
      color: "#3EC70B",
    },
  ];
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
