import { Box, Typography } from "@mui/material";
import React from "react";
import Statistics from "../../components/globalComponents/statistics/Statistics";
import SummaryCount from "../../components/globalComponents/summaryCount/SummaryCount";
import OrderContent from "../../components/customerComponents/orderContent/OrderContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import { useSelector } from "react-redux";

const summaryCount = [
  {
    icon: <img src={img1} style={{ height: "25px" }} alt="" />,
    title: "New Registered Riders",
    number: "32",
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
    title: "Total Active Riders",
    number: "100 as of 12nn (12-19-2022)",
    bgColor: "#A100FC",
  },
  {
    icon: <img src={img4} style={{ height: "25px" }} alt="" />,
    title: "Total Delivered by Riders",
    number: "30 as of 12nn (12-19-2022)",
    bgColor: "#F75F86",
  },
];

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CustomerOrderHistory = () => {
  const { width, slidesPerView } = useSelector(
    (state) => state.orderHistoryWidth
  );
  return (
    <Box p="20px" bgcolor="#454d55">
      <Statistics />
      <Box p="20px" bgcolor="#151C26">
        <Typography
          variant="h3"
          color="#FFF"
          fontWeight={600}
          textAlign="center"
          mb="10px"
        >
          USER AVAILABILITY DASHBOARD
        </Typography>
        <SummaryCount data={summaryCount} />
        <Box bgcolor="#151c26" maxHeight="655px" maxWidth={width}>
          <Swiper spaceBetween={20} slidesPerView={slidesPerView}>
            {array.map((item, index) => (
              <SwiperSlide key={index}>
                <OrderContent />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerOrderHistory;
