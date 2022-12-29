import { Box } from "@mui/material";
import React from "react";
import NewOrdersNav from "../../components/restuarantComponents/newOrdersNav/NewOrdersNav";
import TableComponent from "../../components/riderComponents/table/TableComponent";
import Statistics from "../../components/globalComponents/statistics/Statistics";
import SummaryCount from "../../components/globalComponents/summaryCount/SummaryCount";
import DashboardHeader from "../../components/globalComponents/dashboardHeader/DashboardHeader";
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

const RiderDashboard = () => {
  return (
    <Box p="20px" mb="0px" pb="4px" bgcolor="#454d55">
      <Statistics />
      <Box p="20px" pb="10px" bgcolor="#151C26">
        <DashboardHeader title="RIDERS NETFLOW DASHBOARD" />
        <SummaryCount data={summaryCount} />
        <NewOrdersNav />
        {/* the data is need in a array form */}
        <TableComponent data={sampleData} colorTheme={colorTheme} />
      </Box>
    </Box>
  );
};

export default RiderDashboard;
