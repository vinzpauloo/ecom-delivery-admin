import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewOrdersNav from "../../components/restuarantComponents/newOrdersNav/NewOrdersNav";
import TableComponent from "../../components/restuarantComponents/table/TableComponent";
import Statistics from "../../components/globalComponents/statistics/Statistics";
import SummaryCount from "../../components/globalComponents/summaryCount/SummaryCount";
import DashboardHeader from "../../components/globalComponents/dashboardHeader/DashboardHeader";

import img1 from "../../assets/images/img01.png";
import img2 from "../../assets/images/img02.png";
import img3 from "../../assets/images/img03.png";
import img4 from "../../assets/images/img04.png";
import img5 from "../../assets/images/img05.png";
import img6 from "../../assets/images/img06.png";
import { useCountProduct } from "../../hooks/useProduct";

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

const RestaurantDashboard = () => {
  const [countProduct, setCountProduct] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sumPrice, setSumPrice] = useState(0);
  const [avgPrice, setAvgPrice] = useState(0);
  const {
    getCountProduct,
    getMinimumPrice,
    getMaximumPrice,
    getSumPrice,
    getAveragePrice,
  } = useCountProduct();

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
      number: countProduct,
      bgColor: "#A100FC",
    },
    {
      icon: <img src={img6} style={{ height: "25px" }} alt="" />,
      title: "Total Orders",
      number: "133",
      bgColor: "#F75F86",
    },
  ];
  const loadCountProduct = async () => {
    const response = await getCountProduct({ count: 10 });
    console.log("getCountProduct", response);
    setCountProduct(response);
  };

  // const loadMinimumPrice = async () => {
  //   const response = await getMinimumPrice({ min: 10 });
  //   console.log("getMinPrice", response);
  //   setMinPrice(response);
  // };
  // const loadMaximumPrice = async () => {
  //   const response = await getMaximumPrice({ max: 10 });
  //   console.log("getMaxPrice", response);
  //   setMaxPrice(response);
  // };
  // const loadSumPrice = async () => {
  //   const response = await getSumPrice({ sum: 10 });
  //   console.log("getSumPrice", response);
  //   setSumPrice(response);
  // };
  // const loadAveragePrice = async () => {
  //   const response = await getAveragePrice({ avg: 10 });
  //   console.log("getAvgPrice", response);
  //   setAvgPrice(response);
  // };

  useEffect(() => {
    loadCountProduct();
    // loadMinimumPrice();
    // loadMaximumPrice();
    // loadSumPrice();
    // loadAveragePrice();
  }, []);
  return (
    <Box p={"20px"} mb="0px" pb="4px" bgcolor={"#454d55"}>
      <Statistics />
      <Box p={"20px"} pb="10px" bgcolor={"#151C26"}>
        <DashboardHeader restaurantData={data} title="USER NETFLOW DASHBOARD" />
        <SummaryCount data={summaryCount} />
        <NewOrdersNav />
        {/* the data is need in a array form */}
        <TableComponent data={sampleData} colorTheme={colorTheme} />
      </Box>
    </Box>
  );
};

export default RestaurantDashboard;
