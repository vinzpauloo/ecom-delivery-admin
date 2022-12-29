import React from "react";
import RestaurantInfo from "../../components/restuarantComponents/restaurantInfo/RestaurantInfo";
import TableComponent from "../../components/restuarantComponents/table/TableComponent";
import { Box, Typography } from "@mui/material";
import Statistics from "../../components/globalComponents/statistics/Statistics";

const restaurantData = [1];
const restaurantOrders = [
  "delivered",
  "delivered",
  "cancelled",
  "cancelled",
  "preparing",
  "preparing",
  "cancelled",
  "cancelled",
  "received",
  "received",
  "received",
  "received",
];
const colorTheme = {
  main: "#00FF19",
  button1: {
    text: "DELETE",
    bgColor: "#535353",
  },
  button2: {
    text: "UPDATE",
    bgColor: "#535353",
  },
};

const RestaurantOrders = () => {
  return (
    <Box p={"20px"} bgcolor={"#454d55"}>
      <Statistics />
      <Box p={"20px"} bgcolor="#151C26">
        <Typography
          variant="h3"
          color="#FFF"
          fontWeight={600}
          textAlign="center"
          mb="10px"
        >
          RESTAURANT PROFILE (RECORDS)
        </Typography>
        {/* the data is need in a array form */}
        <RestaurantInfo data={restaurantData} colorTheme={colorTheme} />
        <TableComponent data={restaurantOrders} />
      </Box>
    </Box>
  );
};

export default RestaurantOrders;
