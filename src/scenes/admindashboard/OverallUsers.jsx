import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { withStyles } from "@mui/styles";
import { tokens } from "../../theme";
import AdminHeader from "../../components/adminComponents/Header";
import Waffle from "../../components/WaffleOverallUsers";
import BarChart from "../../components/BarChartOverallUsers";

import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import calendar from "../../assets/images/calendar.png";
import totalproducts from "../../assets/images/totalproducts.png";
import totalorders from "../../assets/images/totalorders.png";
import deliveredicon from "../../assets/images/deliveredicon.png";
import fordeliveryicon from "../../assets/images/fordeliveryicon.png";
import canceledicon from "../../assets/images/canceledicon.png";
import orderingicon from "../../assets/images/orderingicon.png";
import guestusersicon from "../../assets/images/guestusersicon.png";
import check from "../../assets/images/check.png";
import orderedusersicon from "../../assets/images/orderedusersicon.png";
import userbrowseicon from "../../assets/images/userbrowseicon.png";

import { useOrders } from "../../hooks/useOrders";
import { useCountProduct } from "../../hooks/useProduct";

const OverallUsers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [allOrders, setAllOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const { getCountProduct } = useCountProduct();
  const { getOrders } = useOrders();

  const loadOrders = async () => {
    const response = await getOrders();
    console.log(response.data);
    setAllOrders(response.data);
  };

  const loadProducts = async (status) => {
    const params = { with: status };
    const response = await getCountProduct(params);
    console.log(response);
    setProducts(response);
    console.log(products);
  };

  useEffect(() => {
    loadOrders();
    loadProducts("restaurant");
  }, []);

  return (
    <Box
      p="8px"
      height="90vh"
      width="auto"
      px="auto"
      sr={{ overflow: "hidden" }}
    >
      {/* CPU TRAFFIC PAGE LIKES SALES UPDATE OVERALL USERS */}
      <AdminHeader />

      {/* 2ND ROW */}
      <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="10px"
          gridColumn="span 6"
        >
          <Box backgroundColor={colors.primary[400]} height="201px">
            <Box>
              <Typography
                fontWeight="300"
                fontSize="15px"
                textAlign="center"
                mt="5px"
              >
                Current Status of Netflow Devices
              </Typography>
            </Box>

            <Box height="201px" m="-20px 100px 0 -20px" color="black">
              <Waffle />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="10px"
          gridColumn="span 6"
        >
          <Box backgroundColor={colors.primary[400]} height="201px">
            <Box>
              <Typography
                fontWeight="300"
                fontSize="15px"
                textAlign="center"
                mt="5px"
              >
                Current Status of Interfaces of all Netflow Devices
              </Typography>
            </Box>

            <Box height="201px" m="-20px 100px 0 -20px" color="black">
              <Waffle />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 3RD ROW */}
      <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        <Box gridColumn="span 12" mt="4px">
          <Box display="flex" justifyContent="center" gap="100px">
            <Box display="flex" alignItems="center" gap="7px">
              <img src={deliveredicon} alt="" />
              <Typography fontSize="15px" fontWeight="300">
                Delivered
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="7px">
              <img src={fordeliveryicon} alt="" />
              <Typography fontSize="15px" fontWeight="300">
                For Delivery
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="7px">
              <img src={canceledicon} alt="" />
              <Typography fontSize="15px" fontWeight="300">
                Canceled
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="7px">
              <img src={orderingicon} alt="" />
              <Typography fontSize="15px" fontWeight="300">
                Ordering
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="7px">
              <img src={guestusersicon} alt="" />
              <Typography fontSize="15px" fontWeight="300">
                Guest Users
              </Typography>
            </Box>
          </Box>

          <Box display="flex" justifyContent="center" gap="10px" mt="25px">
            <Box
              backgroundColor="#01CDFF"
              width="400px"
              height="54px"
              display="flex"
              //   justifyContent="center"
              alignItems="center"
              p={1}
              borderRadius="5px"
              justifyContent="space-between"
            >
              <Box>
                <Typography fontSize="15px" fontWeight="300">
                  Social Media | Opt-in Users
                </Typography>
                <Typography fontSize="18px" fontWeight="700">
                  11,260 / 1,986
                </Typography>
              </Box>

              <Box display="flex" gap="5px">
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
              </Box>
            </Box>
            <Box
              backgroundColor="#BF9742"
              width="400px"
              height="54px"
              display="flex"
              //   justifyContent="center"
              alignItems="center"
              p={1}
              borderRadius="5px"
              justifyContent="space-between"
            >
              <Box>
                <Typography fontSize="15px" fontWeight="300">
                  Total Upcoming Broadcast(s)
                </Typography>
                <Typography fontSize="18px" fontWeight="700">
                  79
                </Typography>
              </Box>

              <Box display="flex" gap="5px" mr="5px">
                <img src={calendar} alt="" />
              </Box>
            </Box>
            <Box
              backgroundColor="#A100FC"
              width="400px"
              height="54px"
              display="flex"
              //   justifyContent="center"
              alignItems="center"
              p={1}
              borderRadius="5px"
              justifyContent="space-between"
            >
              <Box>
                <Typography fontSize="15px" fontWeight="300">
                  Total Products
                </Typography>
                <Typography fontSize="18px" fontWeight="700">
                  {products.length}
                </Typography>
              </Box>

              <Box display="flex" gap="5px" mr="5px">
                <img src={totalproducts} alt="" />
              </Box>
            </Box>
            <Box
              backgroundColor="#F75F86"
              width="400px"
              height="54px"
              display="flex"
              //   justifyContent="center"
              alignItems="center"
              p={1}
              borderRadius="5px"
              justifyContent="space-between"
            >
              <Box>
                <Typography fontSize="15px" fontWeight="300">
                  Total Orders
                </Typography>
                <Typography fontSize="18px" fontWeight="700">
                  {allOrders.length}
                </Typography>
              </Box>

              <Box display="flex" gap="5px" mr="5px">
                <img src={totalorders} alt="" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 4TH ROW */}
      <Box
        marginTop="10px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="10px"
          gridColumn="span 6"
        >
          <Box
            backgroundColor={colors.primary[400]}
            height="201px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box>
              <Typography fontWeight="300" fontSize="15px">
                You have 28 new orders as of 12:05pm December 19, 2022
              </Typography>
              <Typography fontWeight="900" fontSize="50px">
                28
              </Typography>
              <Typography fontWeight="300" fontSize="20px">
                INSTAGRAM | FACEBOOK | TWITTER | YOUTUBE
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="10px"
          gridColumn="span 6"
        >
          <Box
            backgroundColor={colors.primary[400]}
            height="201px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box>
              <Typography fontSize="15px" fontWeight="300" mb="10px">
                Refresh Network
              </Typography>

              <img src={check} alt="" width="80px" />

              <Typography fontSize="20px" fontWeight="300">
                No Alerts
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 5TH ROW */}
      <Box
        marginTop="4px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="10px"
      >
        {/* STATISTICS BAR  */}
        <Box
          backgroundColor={colors.primary[400]}
          height="360px"
          gridColumn="span 12"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // gap="150px"
            p="10px 30px"
            textAlign="center"
            // marginLeft="90px"
          >
            <Typography fontSize="25px" fontWeight="600">
              USER STATISTICS
            </Typography>

            {/* <Typography fontSize="20px" fontWeight="600" marginLeft="90px">
              2022
            </Typography> */}

            <Box display="flex" gap="20px" mr="200px">
              <Box display="flex" gap="5px">
                <Typography fontSize="15px" fontWeight="300">
                  Ordered Users
                </Typography>
                <img src={orderedusersicon} alt="" />
              </Box>

              <Box display="flex" gap="5px">
                <Typography fontSize="15px" fontWeight="300">
                  User Browse Only
                </Typography>
                <img src={userbrowseicon} alt="" />
              </Box>
            </Box>
          </Box>

          <Box height="345px" m="-50px -8px 0 -8px">
            <BarChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OverallUsers;
