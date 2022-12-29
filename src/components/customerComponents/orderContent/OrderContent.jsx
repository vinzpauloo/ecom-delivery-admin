import { Box, Button, Typography } from "@mui/material";
import React from "react";
import restImg from "./restImg.png";
import delivered from "./deliveredImg.png";
import riderImg from "./riderImg.png";

const rowContainer = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  padding: "10px",
  borderBottom: "2px solid #FFF",
};

const rowContentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "10px 0",
};

const contentStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
};

const contentKeyStyle = {
  variant: "p",
  fontSize: "12px",
  opacity: ".5",
};

const contentValueStyle = {
  variant: "p",
  fontSize: "12px",
  marginLeft: "15px",
};

const OrderContent = () => {
  return (
    <Box width="500px" mt="18px" mr="25px" display="inline-block">
      <Box display="flex" alignItems="flex-start">
        <Button
          sx={{
            backgroundColor: "#A47E3B",
            borderRadius: "0",
            "&:hover": { backgroundColor: "#A47E3B" },
          }}
        >
          <Typography textAlign="center" fontWeight="600" color="#FFF">
            ORDER ID : XRF123
          </Typography>
        </Button>
      </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        flexDirection="column"
        padding="0 30px 0 15px"
        border="1px solid #D9D9D9"
      >
        <Box sx={rowContainer}>
          <Box sx={rowContentStyle}>
            <Box sx={contentStyle}>
              <Typography sx={contentKeyStyle}>Costumer Name :</Typography>
              <Typography sx={contentValueStyle}>Brandon Boyd</Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={contentKeyStyle}>Contact Number :</Typography>
              <Typography sx={contentValueStyle}>0917 123 4567</Typography>
            </Box>
          </Box>
          <Box sx={rowContentStyle}>
            <Box sx={contentStyle}>
              <Typography sx={contentKeyStyle}>Pick up Address :</Typography>
              <Typography sx={contentValueStyle}>
                Chan’s Chinese Restaurant, Panglao, Bohol, Philippines
              </Typography>
            </Box>
          </Box>
          <Box sx={rowContentStyle}>
            <Box sx={contentStyle}>
              <Typography sx={contentKeyStyle}>Delivery Address :</Typography>
              <Typography sx={contentValueStyle}>
                4117 41st Floor., GT Tower Intl., De La Costa, Makati City
              </Typography>
            </Box>
          </Box>
          <Box sx={rowContentStyle}>
            <Box sx={contentStyle}>
              <Typography sx={contentKeyStyle}>Order Placed Time :</Typography>
              <Typography sx={contentValueStyle}>01:30pm</Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={contentKeyStyle}>
                Order Delivered Time :
              </Typography>
              <Typography sx={contentValueStyle}>01:30pm</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            ...rowContainer,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={contentStyle}>
            <Typography sx={contentKeyStyle}>Order Details :</Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Typography sx={contentValueStyle} mb="5px">
                Ramen Noodles (3x)
              </Typography>
              <Typography sx={contentValueStyle} mb="5px">
                Milk Tea (2x)
              </Typography>
              <Typography sx={contentValueStyle} mb="5px">
                -1 Watermelon{" "}
              </Typography>
              <Typography sx={contentValueStyle} mb="5px">
                -1 Boba Soya
              </Typography>
              <Typography sx={contentValueStyle} mb="5px">
                Pecking Duck (1x)
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                ...contentValueStyle,
                marginLeft: "0",
                marginBottom: "10px",
              }}
            >
              Chan’s Restaurant
            </Typography>
            <img src={restImg} style={{ height: "100px" }} alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            ...rowContainer,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={contentStyle}>
            <Box
              sx={{
                ...rowContentStyle,
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box
                display="grid"
                gridTemplateColumns="repeat(3,1fr)"
                width="100%"
                padding="5px 0"
              >
                <Typography sx={contentKeyStyle} gridColumn="span 2">
                  Sub Total :
                </Typography>
                <Typography sx={contentValueStyle} gridColumn="span">
                  1,350 php
                </Typography>
              </Box>
              <Box
                display="grid"
                gridTemplateColumns="repeat(3,1fr)"
                width="100%"
                padding="5px 0"
              >
                <Typography sx={contentKeyStyle} gridColumn="span 2">
                  Delivery fee :
                </Typography>
                <Typography sx={contentValueStyle} gridColumn="span">
                  85 php
                </Typography>
              </Box>
              <Box
                display="grid"
                gridTemplateColumns="repeat(3,1fr)"
                width="100%"
                padding="5px 0"
              >
                <Typography sx={contentKeyStyle} gridColumn="span 2">
                  Total :
                </Typography>
                <Typography sx={contentValueStyle} gridColumn="span">
                  1,435 php
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                ...contentValueStyle,
                marginLeft: "0",
                marginBottom: "5px",
              }}
            >
              Order Status
            </Typography>
            <img src={delivered} style={{ height: "60px" }} alt="" />
            <Typography
              sx={{
                ...contentValueStyle,
                marginLeft: "0",
              }}
            >
              Order Received
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...rowContainer,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ ...contentStyle, alignItems: "center" }}>
            <Box
              sx={{
                ...rowContentStyle,
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box
                display="grid"
                gridTemplateColumns="repeat(2,1fr)"
                width="100%"
                padding="5px 0"
              >
                <Typography sx={contentKeyStyle} gridColumn="span">
                  Delivery Rider :
                </Typography>
                <Typography
                  sx={contentValueStyle}
                  marginLeft="20px"
                  gridColumn="span"
                >
                  Valentino Rossi
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <img
              src={riderImg}
              style={{
                height: "60px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
              alt=""
            />
          </Box>
        </Box>
        <Box
          sx={{
            ...rowContainer,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            padding: "20px 0",
          }}
        >
          <Box sx={{ ...contentStyle, alignItems: "center" }}>
            <Button
              sx={{
                backgroundColor: "#D52B1D",
                padding: "5px 30px",
                "&:hover": { backgroundColor: "#860f06" },
                "&:hover > p": { color: "#FFF" },
              }}
            >
              <Typography color="#FFF" textTransform="capitalize">
                Delete Order
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderContent;
