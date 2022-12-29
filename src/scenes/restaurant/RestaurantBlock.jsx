import RestaurantInfo from "../../components/restuarantComponents/restaurantInfo/RestaurantInfo";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Statistics from "../../components/globalComponents/statistics/Statistics";
import Header from "../../components/adminComponents/Header";
import { useRestaurantByStatus } from "../../hooks/useRestaurantByStatus";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colorTheme = {
  main: "#FF5555",
  button1: {
    text: "RE-ENTRY",
    bgColor: "#25E638",
    hoverBgColor: "#860f06",
    hoverColor: "#FFF",
  },
  button2: {
    text: "UPDATE",
    bgColor: "#25E6DA",
    hoverBgColor: "#02a512",
    hoverColor: "#FFF",
  },
};

const RestaurantBlock = () => {
  const [restaurantBlockList, setRestaurantBlockList] = useState([]);
  const { getRestaurantDeclined } = useRestaurantByStatus();

  const loadRestaurantDeclined = async () => {
    const response = await getRestaurantDeclined({ status: "Declined" });
    console.log("~~~", response);
    setRestaurantBlockList(response);
  };
  useEffect(() => {
    loadRestaurantDeclined();
  }, []);
  return (
    <Box p={"20px"} bgcolor={"#454d55"}>
      <Header />
      <Box bgcolor="#151c26" p="5px 15px" maxHeight="790px" overflow="auto">
        {/* the data is need in a array form */}
        <RestaurantInfo data={restaurantBlockList} colorTheme={colorTheme} />
      </Box>
    </Box>
  );
};

export default RestaurantBlock;
