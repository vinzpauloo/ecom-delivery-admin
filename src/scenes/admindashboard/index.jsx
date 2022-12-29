import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import Stream from "../../components/Stream";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import PieChart2 from "../../components/PieChartAdmin";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

import cpuTraffic from "../../assets/images/cputraffic.png";
import pageLikes from "../../assets/images/pagelikes.png";
import salesUpdate from "../../assets/images/salesupdate.png";
import overallUsers from "../../assets/images/overallusers.png";
import orderDelivered from "../../assets/images/orderDelivered.png";
import registeredRiders from "../../assets/images/registeredriders.png";
import restaurantCount from "../../assets/images/restaurantcount.png";
import registeredUsers from "../../assets/images/registeredusers.png";
import burger from "../../assets/images/burger.png";
import shawarma from "../../assets/images/shawarma.png";
import chicken from "../../assets/images/chicken.png";
import kabayan from "../../assets/images/kabayan.png";
import biryani from "../../assets/images/biryani.png";
import circle1 from "../../assets/images/circle1.png";
import circle2 from "../../assets/images/circle2.png";
import circle3 from "../../assets/images/circle3.png";
import { TypeSpecimenOutlined } from "@mui/icons-material";
import arrow1 from "../../assets/images/arrow1.png";
import arrow2 from "../../assets/images/arrow2.png";
import arrow3 from "../../assets/images/arrow3.png";
import stephen from "../../assets/images/stephen.png";
import apple from "../../assets/images/apple.png";
import mimay from "../../assets/images/mimay.png";
import jetlee from "../../assets/images/jetlee.png";
import alexanlouis from "../../assets/images/alexanlouise.png";
import jamesreid from "../../assets/images/jamesreid.png";
import joshua from "../../assets/images/joshua.png";
import daniel from "../../assets/images/daniel.png";
import alexan from "../../assets/images/alexan.png";
import zanjoe from "../../assets/images/zanjoe.png";
import jollibee from "../../assets/images/jollibee.png";
import mcdo from "../../assets/images/mcdo.png";
import italiannis from "../../assets/images/italiannis.png";
import bonchon from "../../assets/images/bonchon.png";
import yakimix from "../../assets/images/yakimix.png";
import chowking from "../../assets/images/chowking.png";
import andoks from "../../assets/images/andoks.png";
import contis from "../../assets/images/contis.png";
import barriofiesta from "../../assets/images/barriofiesta.png";
import shawarmashack from "../../assets/images/shawarmashack.png";
import toni from "../../assets/images/toni.png";
import jaime from "../../assets/images/jaime.png";
import vincent from "../../assets/images/vincent.png";
import paolo from "../../assets/images/paolo.png";
import ariane from "../../assets/images/ariane.png";
import mark from "../../assets/images/mark.png";
import phil from "../../assets/images/phil.png";
import jojo from "../../assets/images/jojo.png";
import nove from "../../assets/images/nove.png";

import AdminHeader from "../../components/adminComponents/Header";

import { useCountProduct } from "../../hooks/useProduct";
import { useRestaurants } from "../../hooks/useRestaurants";
import { useRiders } from "../../hooks/useRiders";
import { useRiderByStatus } from "../../hooks/useRiderByStatus";
import { useUser } from "../../hooks/useUser";
import { useOrders } from "../../hooks/useOrders";

const AdminDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { getCountProduct } = useCountProduct();
  const { getRestaurants } = useRestaurants();
  const { getRiders } = useRiders();
  const { getRiderApproved } = useRiderByStatus();
  const { getUser } = useUser();
  const { getOrders } = useOrders();

  const [approvedRider, setApprovedRider] = useState();
  const [overallRestaurants, setOverallRestaurants] = useState();
  const [products, setProducts] = useState([]);
  const [regUsers, setRegUsers] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [allRiders, setAllRiders] = useState([]);

  const loadProducts = async (status) => {
    const params = { with: status };
    const response = await getCountProduct(params);
    console.log(response);
    setProducts(response);
    console.log(products);
  };

  const loadRestaurants = async () => {
    const response = await getRestaurants();
    console.log(response.length);
    setOverallRestaurants(response.length);
  };

  const loadRiders = async (Rider) => {
    const params = { user_type: Rider };
    const response = await getUser(params);
    console.log("allRiders", response);
    setAllRiders(response);
  };

  const loadApprovedRiders = async () => {
    const response = await getRiderApproved();
    console.log(response.length);
    setApprovedRider(response.length);
  };

  const loadUsers = async () => {
    const response = await getUser();
    console.log(response);
    setRegUsers(response);
  };

  const loadOrders = async (status) => {
    const params = { status: status };
    const response = await getOrders(params);
    console.log(response.data);
    setDeliveredOrders(response.data);
  };

  useEffect(() => {
    loadProducts("restaurant");
    loadRestaurants();
    loadRiders("Rider");
    loadApprovedRiders();
    loadUsers();
    loadOrders("delivered");
  }, []);

  return (
    <Box
      p="10px"
      height="90vh"
      width="auto"
      px="auto"
      sr={{ overflow: "hidden" }}
    >
      {/* CPU TRAFFIC PAGE LIKES SALES UPDATE OVERALL USERS */}
      <AdminHeader />

      {/* ORDERS DELIVERED WEEKLY CAP REPORT */}
      <Box
        backgroundColor="#343A40"
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        mt="10px"
      >
        <Box>
          <Box
            backgroundColor="#37E2D5"
            display="flex"
            borderRadius="5px"
            alignItems="center"
            height="57px"
            gap="10px"
            marginBottom="5px"
          >
            <Box marginLeft="50px">
              <img src={orderDelivered} alt="test" style={{ width: "20px" }} />
            </Box>
            <Box>
              <Typography color="black">Orders Delivered</Typography>
              <Typography color="black">{deliveredOrders.length}</Typography>
            </Box>
          </Box>

          <Box
            backgroundColor="#FD841F"
            display="flex"
            borderRadius="5px"
            alignItems="center"
            height="57px"
            gap="10px"
            marginBottom="5px"
          >
            <Box marginLeft="50px">
              <img
                src={registeredRiders}
                alt="test"
                style={{ width: "20px" }}
              />
            </Box>
            <Box>
              <Typography color="black">Registered Riders</Typography>
              <Typography color="black">{approvedRider}</Typography>
            </Box>
          </Box>

          <Box
            backgroundColor="#5F9DF7"
            display="flex"
            borderRadius="5px"
            alignItems="center"
            height="57px"
            gap="10px"
            marginBottom="5px"
          >
            <Box marginLeft="50px">
              <img src={restaurantCount} alt="test" style={{ width: "20px" }} />
            </Box>
            <Box>
              <Typography color="black">Overall Restaurant Count</Typography>
              <Typography color="black">{overallRestaurants}</Typography>
            </Box>
          </Box>

          <Box
            backgroundColor="#FBCB0A"
            display="flex"
            borderRadius="5px"
            alignItems="center"
            height="57px"
            gap="10px"
            marginBottom="5px"
          >
            <Box marginLeft="50px">
              <img src={registeredUsers} alt="test" style={{ width: "20px" }} />
            </Box>
            <Box>
              <Typography color="black">Registered Users</Typography>
              <Typography color="black">{regUsers.length}</Typography>
            </Box>
          </Box>
        </Box>

        {/* <Box>
          <Box
            mt="5px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h7"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Weekly Recap Report
              </Typography>
            </Box>
          </Box>

          <Box
            mt="0px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Typography
                variant="h7"
                fontWeight="bold"
                // color={colors.greenAccent[500]}
              >
                Sales : January 01 2022 - December 01 2022
              </Typography>
            </Box>
          </Box>

          <Box height="193px" width="1000px" m="-50px 0" color="black">
            <Stream />
          </Box>

          <Box
            display="flex"
            gap="100px"
            p="0 100px"
            mt="30px"
            alignItems="center"
            justifyContent="center"
          >
            <Box borderRight="1px white solid" p="0 100px" textAlign="center">
              <img src={arrow3} alt="" height="15px" />
              <Typography fontSize="10px" color="#00FF19" fontWeight="900">
                26%
              </Typography>
              <Typography fontSize="10px" fontWeight="600">
                198,600.00
              </Typography>
              <Typography fontSize="10px">Total Revenue</Typography>
            </Box>
            <Box textAlign="center">
              <img src={arrow1} alt="" height="15px" />
              <Typography fontSize="10px" color="#E6B325" fontWeight="900">
                32%
              </Typography>
              <Typography fontSize="10px" fontWeight="600">
                55,260.00
              </Typography>
              <Typography fontSize="10px">Total Cost</Typography>
            </Box>
            <Box borderLeft="1px white solid" p="0 100px" textAlign="center">
              <img src={arrow2} alt="" height="15px" />
              <Typography fontSize="10px" color="#FF0000" fontWeight="900">
                14%
              </Typography>
              <Typography fontSize="10px" fontWeight="600">
                36,000.00
              </Typography>
              <Typography fontSize="10px">Total Profit</Typography>
            </Box>
          </Box>
        </Box> */}
      </Box>

      {/* TRANSITIONING CHART AND RECENTLY ADDED PRODUCTS */}
      <Box
        marginTop="10px"
        display="grid"
        // gridTemplateColumns="800px 800px"
        gridTemplateColumns="repeat(4, 1fr)"
        gap="10px"
      >
        {/* <Box
          // gridColumn="span 6"
          // gridRow="span 3"
          backgroundColor={colors.primary[400]}
          height="310px"
          gridColumn="span 2"
        >
          <Box
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid black"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                TRANSITIONING CHART
              </Typography>
            </Box>
            <Box>
              <p>As of November 30, 2022 (12:00 AM)</p>
            </Box>
          </Box>

          <Box
            p="0 40px"
            display="flex "
            alignItems="center"
            sx={{ width: 700, height: 178 }}
          >
            <Box sx={{ width: 1000, height: 250 }}>
              <PieChart2 />
            </Box>
            <Box sx={{ width: 300, height: 175 }}>
              <Box display="flex" gap="20px" marginBottom="10px">
                <img src={circle1} alt="" />
                <Typography fontSize="18px">RIDERS</Typography>
              </Box>
              <Box display="flex" gap="20px" marginBottom="10px">
                <img src={circle3} alt="" />
                <Typography fontSize="18px" marginBottom="10px">
                  RESTAURANTS
                </Typography>
              </Box>
              <Box display="flex" gap="20px">
                <img src={circle2} alt="" />
                <Typography fontSize="18px">CUSTOMERS</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            p="0 200px"
            borderTop="1px white solid"
            borderBottom="1px white solid"
          >
            <Box>
              <Typography variant="h7" fontWeight="bold" fontSize="18px">
                RIDERS
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <img src={arrow1} alt="" height="18px" />
              <Typography color="#E6B325" fontSize="18px">
                18%
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            p="0 200px"
            borderBottom="1px white solid"
          >
            <Box>
              <Typography variant="h7" fontWeight="bold" fontSize="18px">
                RESTAURANTS
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <img src={arrow2} alt="" height="18px" />
              <Typography color="#FF0000" fontSize="18px">
                14%
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            p="0 200px"
            // borderBottom="1px white solid"
          >
            <Box>
              <Typography variant="h7" fontWeight="bold" fontSize="18px">
                CUSTOMERS
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <img src={arrow3} alt="" height="18px" />
              <Typography color="#00FF19" fontSize="18px">
                48%
              </Typography>
            </Box>
          </Box>
        </Box> */}

        <Box
          backgroundColor={colors.primary[400]}
          overflow="auto"
          height="310px"
          gridColumn="span 4"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recently Added Products
            </Typography>
          </Box>

          {products.map((item, index) => {
            return (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
                key={index}
              >
                <Box display="flex" gap="20px">
                  <Box>
                    <img src={item.photo} alt="" width="100px" />
                  </Box>
                  <Box display="flex" flexDirection="column" gap="10px">
                    <Typography color="#F0BB62" variant="h5" fontWeight="600">
                      {item.restaurant.name}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {item.name}
                    </Typography>
                  </Box>
                </Box>

                <Box p="5px 10px">₱{item.price}.00 PHP</Box>
              </Box>
            );
          })}
          {/* <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box display="flex" gap="20px">
                  <Box>
                    <img src={shawarma} alt="" />
                  </Box>
                  <Box display="flex" flexDirection="column" gap="10px">
                    <Typography color="#F0BB62" variant="h5" fontWeight="600">
                      Arabian Nights
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      Shawarma Madness
                    </Typography>
                  </Box>
                </Box>

                <Box p="5px 10px">₱400.00 PHP</Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box display="flex" gap="20px">
                  <Box>
                    <img src={chicken} alt="" />
                  </Box>
                  <Box display="flex" flexDirection="column" gap="10px">
                    <Typography color="#F0BB62" variant="h5" fontWeight="600">
                      Chicken Farm Central
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      Chicken Ala Olai
                    </Typography>
                  </Box>
                </Box>

                <Box p="5px 10px">₱700.00 PHP</Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box display="flex" gap="20px">
                  <Box>
                    <img src={kabayan} alt="" />
                  </Box>
                  <Box display="flex" flexDirection="column" gap="10px">
                    <Typography color="#F0BB62" variant="h5" fontWeight="600">
                      Kabayan Restaurant
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      Pinoy Pizza keso real
                    </Typography>
                  </Box>
                </Box>

                <Box p="5px 10px">₱1025.00 PHP</Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box display="flex" gap="20px">
                  <Box>
                    <img src={biryani} alt="" />
                  </Box>
                  <Box display="flex" flexDirection="column" gap="10px">
                    <Typography color="#F0BB62" variant="h5" fontWeight="600">
                      Arabian Nights
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      Chicken Biryani
                    </Typography>
                  </Box>
                </Box>

                <Box p="5px 10px">₱1350.00 PHP</Box>
              </Box> */}
        </Box>
      </Box>

      {/* REGISTERED USERS LATEST RESTOS INHOUSE RIDERS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        marginTop="10px"
        alignItems="center"
        gap="10px"
      >
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="10px"
          height="268px"
          width="auto"
        >
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h5" fontWeight="600" fontSize="12px">
                REGISTERED USERS
              </Typography>
            </Box>

            <Box backgroundColor="#25E6DA" p="0 40px" textAlign="center">
              <Typography
                variant="h5"
                fontWeight="600"
                fontSize="12px"
                color="black"
              >
                {regUsers.length} Users
              </Typography>
            </Box>
          </Box>

          <Box>
            {/* REGISTERED USERS */}

            <Box
              display="grid"
              gridTemplateColumns="repeat(5, 1fr)"
              p={0}
              fontSize="9px"
              textTransform="uppercase"
              marginTop="4px"
            >
              {regUsers.slice(0, 10).map((item, index) => {
                console.log(regUsers);
                return (
                  <Box textAlign="center" key={index}>
                    <img
                      src={item.photo}
                      alt=""
                      style={{ borderRadius: "50%", width: "75px" }}
                    />
                    <p>{item.first_name} </p>
                  </Box>
                );
              })}
              {/* <Box textAlign="center">
                <img src={apple} alt="" style={{ borderRadius: "50%" }} />
                <p>Apple</p>
              </Box>
              <Box textAlign="center">
                <img src={mimay} alt="" style={{ borderRadius: "50%" }} />
                <p>Mimay</p>
              </Box>
              <Box textAlign="center">
                <img src={jetlee} alt="" style={{ borderRadius: "50%" }} />
                <p>Jet Lee</p>
              </Box>
              <Box textAlign="center">
                <img src={alexanlouis} alt="" style={{ borderRadius: "50%" }} />
                <p>Alexan Louis</p>
              </Box>
              <Box textAlign="center">
                <img src={jamesreid} alt="" style={{ borderRadius: "50%" }} />
                <p>James Reid</p>
              </Box>
              <Box textAlign="center">
                <img src={joshua} alt="" style={{ borderRadius: "50%" }} />
                <p>Joshua</p>
              </Box>
              <Box textAlign="center">
                <img src={daniel} alt="" style={{ borderRadius: "50%" }} />
                <p>Daniel</p>
              </Box>
              <Box textAlign="center">
                <img src={alexan} alt="" style={{ borderRadius: "50%" }} />
                <p>Alexan</p>
              </Box>
              <Box textAlign="center">
                <img src={zanjoe} alt="" style={{ borderRadius: "50%" }} />
                <p>Zanjoe</p>
              </Box> */}
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#2F3439"
              width="auto"
              height="17px"
            >
              <Button style={{ color: "#25E6DA" }}>View List</Button>
            </Box>
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="10px"
          height="268px"
          width="auto"
        >
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h5" fontWeight="600" fontSize="12px">
                LATEST RESTAURANTS
              </Typography>
            </Box>

            <Box backgroundColor="#25E6DA" p="0 40px" textAlign="center">
              <Typography
                variant="h5"
                fontWeight="600"
                fontSize="12px"
                color="black"
              >
                {overallRestaurants} Restaurants
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box
              display="grid"
              gridTemplateColumns="repeat(5, 1fr)"
              p={0}
              fontSize="9px"
              textTransform="uppercase"
              marginTop="4px"
            >
              {/* LATEST RESTAURANTS */}
              {products.slice(0, 10).map((item, index) => {
                return (
                  <Box textAlign="center" key={index}>
                    <img
                      src={item.restaurant.photo}
                      alt=""
                      style={{
                        borderRadius: "50%",
                        width: "75px",
                        height: "auto",
                      }}
                    />
                    <p>{item.restaurant.name}</p>
                  </Box>
                );
              })}
              {/* <Box textAlign="center">
                <img src={mcdo} alt="" style={{ borderRadius: "50%" }} />
                <p>Mcdonalds</p>
              </Box>
              <Box textAlign="center">
                <img
                  src={italiannis}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "70px",
                    height: "74px",
                  }}
                />
                <p>Italiannis</p>
              </Box>
              <Box textAlign="center">
                <img src={bonchon} alt="" style={{ borderRadius: "50%" }} />
                <p>Bonchon</p>
              </Box>
              <Box textAlign="center">
                <img src={yakimix} alt="" style={{ borderRadius: "50%" }} />
                <p>Yakimix</p>
              </Box>
              <Box textAlign="center">
                <img src={chowking} alt="" style={{ borderRadius: "50%" }} />
                <p>Chowking</p>
              </Box>
              <Box textAlign="center">
                <img src={andoks} alt="" style={{ borderRadius: "50%" }} />
                <p>Andoks</p>
              </Box>
              <Box textAlign="center">
                <img src={contis} alt="" style={{ borderRadius: "50%" }} />
                <p>Contis</p>
              </Box>
              <Box textAlign="center">
                <img
                  src={barriofiesta}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "70px",
                    height: "74px",
                  }}
                />
                <p>Barrio Fiesta</p>
              </Box>
              <Box textAlign="center">
                <img
                  src={shawarmashack}
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
                <p>Shawarma Shack</p>
              </Box> */}
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#2F3439"
              width="auto"
              height="17px"
            >
              <Button style={{ color: "#25E6DA" }}>View List</Button>
            </Box>
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="10px"
          height="268px"
          width="auto"
        >
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h5" fontWeight="600" fontSize="12px">
                INHOUSE RIDERS
              </Typography>
            </Box>

            <Box backgroundColor="#25E6DA" p="0 40px" textAlign="center">
              <Typography
                variant="h5"
                fontWeight="600"
                fontSize="12px"
                color="black"
              >
                {approvedRider} Riders
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box
              display="grid"
              gridTemplateColumns="repeat(5, 1fr)"
              p={0}
              fontSize="9px"
              textTransform="uppercase"
              marginTop="4px"
            >
              {/* INHOUSE RIDERS */}
              {allRiders.map((item, index) => {
                return (
                  <Box textAlign="center">
                    <img
                      src={item.photo}
                      alt=""
                      style={{
                        borderRadius: "50%",
                        width: "75px",
                        height: "auto",
                      }}
                    />
                    <p>{item.first_name}</p>
                  </Box>
                );
              })}
              {/* <Box textAlign="center">
                <img src={jaime} alt="" style={{ borderRadius: "50%" }} />
                <p>Jaime</p>
              </Box>
              <Box textAlign="center">
                <img src={vincent} alt="" style={{ borderRadius: "50%" }} />
                <p>Vincent</p>
              </Box>
              <Box textAlign="center">
                <img src={paolo} alt="" style={{ borderRadius: "50%" }} />
                <p>Paolo</p>
              </Box>
              <Box textAlign="center">
                <img src={ariane} alt="" style={{ borderRadius: "50%" }} />
                <p>Ariane</p>
              </Box>
              <Box textAlign="center">
                <img src={mark} alt="" style={{ borderRadius: "50%" }} />
                <p>Mark</p>
              </Box>
              <Box textAlign="center">
                <img src={phil} alt="" style={{ borderRadius: "50%" }} />
                <p>Phil</p>
              </Box>
              <Box textAlign="center">
                <img src={jojo} alt="" style={{ borderRadius: "50%" }} />
                <p>Jojo</p>
              </Box>
              <Box textAlign="center">
                <img src={alexan} alt="" style={{ borderRadius: "50%" }} />
                <p>Alexan</p>
              </Box>
              <Box textAlign="center">
                <img src={nove} alt="" style={{ borderRadius: "50%" }} />
                <p>Novelene</p>
              </Box> */}
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#2F3439"
              width="auto"
              height="17px"
            >
              <Button style={{ color: "#25E6DA" }}>View List</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
