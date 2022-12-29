import { Box, Button, Typography } from "@mui/material";
import React from "react";
import license from "../../../scenes/rider/license.png";
import rider from "../../../scenes/rider/riderImg.png";

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gridAutoRows: "140px",
  gap: "20px",
  background: "#2B3443",
  margin: "15px 0",
  height: "100px",
};

const colStyle = {
  gridColumn: "span",
  display: "flex",
  p: "5px",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100px",
};

const content = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const RiderInfo = ({ data, colorTheme }) => {
  const titleStyle = {
    variant: "h6",
    fontWeight: "500",
    color: colorTheme.main,
    textAlign: "center",
    whiteSpace: "nowrap",
  };
  const subTitleStyle = {
    variant: "p",
    fontWeight: "400",
    textAlign: "center",
    fontSize: "10px",
    whiteSpace: "nowrap",
    textTransform: "Capitalize",
  };
  return (
    <>
      {/* Row Container */}
      {data.map((item, index) => (
        <Box key={index} sx={rowStyle}>
          <Box
            sx={{
              ...colStyle,
              justifyContent: "center",
            }}
          >
            <img
              src={rider}
              alt=""
              style={{ height: "90px", width: "90px", borderRadius: "50%" }}
            />
          </Box>
          <Box sx={colStyle}>
            <Box sx={{ ...content, marginBottom: "10px" }}>
              <Typography sx={titleStyle}>Rider’s Full Name</Typography>
              <Typography sx={subTitleStyle}>Valentinno Rossi</Typography>
            </Box>
            <Box sx={content}>
              <Typography sx={titleStyle}>Motor Vehicle Brand</Typography>
              <Typography sx={subTitleStyle}>{item.brand}</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={{ ...content, marginBottom: "10px" }}>
              <Typography sx={titleStyle}>Address</Typography>
              <Typography sx={subTitleStyle}>{item.address}</Typography>
            </Box>
            <Box sx={content}>
              <Typography sx={titleStyle}>Model</Typography>
              <Typography sx={subTitleStyle}>{item.model}</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={{ ...content, marginBottom: "10px" }}>
              <Typography sx={titleStyle}>Mobile Number</Typography>
              <Typography sx={subTitleStyle}>(+63) 917 456 7890</Typography>
            </Box>
            <Box sx={content}>
              <Typography sx={titleStyle}>Year</Typography>
              <Typography sx={subTitleStyle}>2021</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={{ ...content, marginBottom: "10px" }}>
              <Typography sx={titleStyle}>Email Address</Typography>
              <Typography sx={subTitleStyle}>alexan@1bit.com.ph</Typography>
            </Box>
            <Box sx={content}>
              <Typography sx={titleStyle}>OR Number</Typography>
              <Typography sx={subTitleStyle}>{item.or_number}</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={{ ...content, marginBottom: "10px" }}>
              <Typography sx={titleStyle}>Driver’s License Number</Typography>
              <Typography sx={subTitleStyle}>{item.license_number}</Typography>
            </Box>
            <Box sx={content}>
              <Typography sx={titleStyle}>Plate number</Typography>
              <Typography sx={subTitleStyle}>{item.plate_number}</Typography>
            </Box>
          </Box>
          <Box sx={{ ...colStyle, justifyContent: "center" }}>
            <Typography variant="p" fontWeight="600" textAlign="center">
              Driver’s License
            </Typography>
            <Box width="120px" height="60px">
              <img
                src={license}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default RiderInfo;
