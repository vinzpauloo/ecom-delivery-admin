import { Box, Button, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";
import rest1 from "../../../scenes/restaurant/rest1.png";

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  // gridAutoRows: "100px",
  gap: "20px",
  background: "#2B3443",
  margin: "15px 0",
  minHeight: "140px",
  alignItems: "center",
};

const colStyle = {
  gridColumn: "span",
  display: "flex",
  p: "5px",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100px",
};

const RestaurantInfo = ({ data, colorTheme }) => {
  const titleStyle = {
    variant: "h6",
    fontWeight: "500",
    color: colorTheme.main,
    textAlign: "center",
    whiteSpace: "nowrap",
  };
  const subtitleStyle = {
    variant: "p",
    fontWeight: "400",
    textAlign: "center",
    fontSize: "10px",
    // whiteSpace: "nowrap",
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <>
      {/* Row Container */}
      {data?.map((item, index) => (
        <Box key={index} sx={rowStyle}>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Typography variant="h5" fontWeight="600" color={colorTheme.main}>
              Logo
            </Typography>

            <img
              src={item.restaurants.photo}
              style={{
                width: "70px",
                height: "70px",
                // border: `2px solid ${colorTheme.main}`,
                borderRadius: "5px",
              }}
              alt=""
            />
          </Box>
          <Box sx={colStyle}>
            <Box sx={{ ...contentStyle, marginBottom: "10px" }}>
              <Typography sx={titleStyle}>Restaurant Name</Typography>
              <Typography sx={subtitleStyle}>{item.name}</Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={titleStyle}>Owner’s Full Name</Typography>
              <Typography sx={subtitleStyle}>
                {item.first_name} {item.last_name}
              </Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={{ ...contentStyle, marginBottom: "10px" }}>
              <Typography sx={titleStyle}>Address</Typography>
              <Typography sx={subtitleStyle}>{item.address}</Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={titleStyle}>Owner’s Contact number</Typography>
              <Typography sx={subtitleStyle}>{item.mobile}</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={{ ...contentStyle, marginBottom: "10px" }}>
              <Typography sx={titleStyle}>Mobile Number</Typography>
              <Typography sx={subtitleStyle}>{item.mobile}</Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={titleStyle}>Owner’s Email</Typography>
              <Typography sx={subtitleStyle}>{item.email}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...colStyle,
              gridColumn: "span 2",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                ...contentStyle,
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: "10px",
                width: "100%",
              }}
            >
              <Box
                display="flex"
                // alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography sx={{ ...titleStyle, textAlign: "left" }}>
                  Email Address
                </Typography>
                <Typography sx={subtitleStyle}>
                  {item.restaurant_email}{" "}
                </Typography>
              </Box>
              <Box sx={contentStyle}>
                <Typography sx={titleStyle}>Restaurant ID</Typography>
                <Typography sx={subtitleStyle}>{item.id}</Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              //   alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography sx={{ ...titleStyle, textAlign: "left" }}>
                Short Restaurant Description
              </Typography>
              <Typography sx={subtitleStyle}>{item.description}</Typography>
            </Box>
          </Box>
          {/* <Box
            sx={{
              ...colStyle,
              justifyContent: "space-around",
              padding: "10px",
            }}
          >
            <Button
              sx={{
                background: `${colorTheme.button1.bgColor}`,
                width: "100%",
                "&:hover": {
                  background: `${colorTheme.button1.hoverBgColor}`,
                },
                "&:hover > h5": { color: `${colorTheme.button1.hoverColor}` },
              }}
            >
              <Typography
                variant="h5"
                color="initial"
                fontSize="14px"
                fontWeight="600"
              >
                {colorTheme.button1.text}
              </Typography>
            </Button>
            <Button
              sx={{
                background: `${colorTheme.button2.bgColor}`,
                width: "100%",
                "&:hover": { background: `${colorTheme.button2.hoverBgColor}` },
                "&:hover > h5": { color: `${colorTheme.button2.hoverColor}` },
              }}
            >
              <Typography
                variant="h5"
                color="initial"
                fontSize="14px"
                fontWeight="600"
              >
                {colorTheme.button2.text}
              </Typography>
            </Button>
          </Box> */}
        </Box>
      ))}
    </>
  );
};

export default RestaurantInfo;
