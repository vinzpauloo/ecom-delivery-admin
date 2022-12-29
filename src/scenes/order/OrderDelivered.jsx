import { Box, Typography } from "@mui/material";
import React from "react";
import NewOrdersNav from "../../components/restuarantComponents/newOrdersNav/NewOrdersNav";
import TableComponent from "../../components/orderComponents/table/TableComponent";
import Statistics from "../../components/globalComponents/statistics/Statistics";
import SummaryCount from "../../components/globalComponents/summaryCount/SummaryCount";
import DashboardHeader from "../../components/globalComponents/dashboardHeader/DashboardHeader";

import img1 from "../../assets/images/img01.png";
import img2 from "../../assets/images/img02.png";
import img3 from "../../assets/images/img03.png";
import img4 from "../../assets/images/img04.png";
import img5 from "../../assets/images/img05.png";
import img6 from "../../assets/images/img06.png";

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
    title: "Total Upcoming Broadcast(s)",
    number: "76",
    bgColor: "#BF9742",
  },
  {
    icon: <img src={img5} style={{ height: "25px" }} alt="" />,
    title: "Total Products",
    number: "89",
    bgColor: "#A100FC",
  },
  {
    icon: <img src={img6} style={{ height: "25px" }} alt="" />,
    title: "Total Orders",
    number: "133",
    bgColor: "#F75F86",
  },
];

const sampleData = [
  "delivered",
  "delivered",
  "delivered",
  "delivered",
  "cancelled",
  "preparing",
  "preparing",
  "cancelled",
  "received",
  "received",
  "received",
];

const data = [
  "Jollibee",
  "McDonalds",
  "Italiannis",
  "BonChan",
  "Chowking",
  "Andok's",
  "Conti's",
  "Barrio Fiesta",
];

const OrderDelivered = () => {
  return (
    <Box p={"20px"} mb="0px" pb="4px" bgcolor={"#454d55"}>
      <Statistics />
      <Box p={"20px"} pb="10px" bgcolor={"#151C26"}>
        <DashboardHeader restaurantData={data} title="USER NETFLOW DASHBOARD" />
        <SummaryCount data={summaryCount} />
        <Typography
          variant="h3"
          color="#FFF"
          fontWeight={600}
          textAlign="center"
          mb="10px"
        >
          Delivered Orders
        </Typography>
        {/* the data is need in a array form */}
        <TableComponent data={sampleData} color="#00FF19" />
      </Box>
    </Box>
  );
};

export default OrderDelivered;
