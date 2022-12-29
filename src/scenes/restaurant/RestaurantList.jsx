import RestaurantInfo from "../../components/restuarantComponents/restaurantInfo/RestaurantInfo";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Statistics from "../../components/globalComponents/statistics/Statistics";
import { useRestaurantByStatus } from "../../hooks/useRestaurantByStatus";
import Header from "../../components/adminComponents/Header";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colorTheme = {
  main: "#00FF19",
  button1: {
    text: "DELETE",
    bgColor: "#535353",
    hoverBgColor: "#860f06",
    hoverColor: "#FFF",
  },
  button2: {
    text: "UPDATE",
    bgColor: "#535353",
    hoverBgColor: "#02a512",
    hoverColor: "#FFF",
  },
};

const RestaurantList = () => {
  const [restaurantApprovedList, setRestaurantApprovedList] = useState([]);
  const { getRestaurantApproved } = useRestaurantByStatus();

  const loadRestaurantApproved = async () => {
    const response = await getRestaurantApproved({ approval: "Approved" });
    console.log("getRestaurantApprovedResponse", response);
    setRestaurantApprovedList(response);
  };
  useEffect(() => {
    loadRestaurantApproved();
  }, []);
  return (
    <Box p={"20px"} bgcolor={"#454d55"}>
      {/* <Statistics /> */}
      <Header />
      <Typography
        variant="h3"
        color="#FFF"
        fontWeight={600}
        textAlign="center"
        mb="10px"
      >
        APPROVED RESTAURANTS
      </Typography>
      <Box bgcolor="#151c26" p="5px 15px" maxHeight="755px" overflow="auto">
        {/* the data is need in a array form */}
        <RestaurantInfo data={restaurantApprovedList} colorTheme={colorTheme} />
      </Box>
    </Box>
  );
};

export default RestaurantList;
