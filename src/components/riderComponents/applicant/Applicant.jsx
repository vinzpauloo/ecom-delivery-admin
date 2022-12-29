import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useRiders } from "../../../hooks/useRiders.js";
import { handleModalStatus } from "../../../features/modalSlice";
import license from "../../../scenes/rider/license.png";
import AlertModal from "../../globalComponents/AlertModal";

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gridAutoRows: "140px",
  gap: "20px",
  background: "#2B3443",
  margin: "0 0 15px",
  height: "100px",
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

const contentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const titleStyle = {
  variant: "h6",
  fontWeight: "500",
  color: "#00FF19",
  textAlign: "center",
  whiteSpace: "nowrap",
};

const subtitleStyle = {
  variant: "p",
  fontWeight: "400",
  textAlign: "center",
  fontSize: "10px",
  whiteSpace: "nowrap",
  textTransform: "Capitalize",
};

const Applicant = ({ data }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState(null);
  const { getRiders, updateRiderStatus } = useRiders();

  const loadRiders = async () => {
    const response = await getRiders({ with: "user", approval: "Applied" });
    console.log("getRider response", response);
    setList(response);
    setIsLoading(false);
  };

  const handleUpdateStatus = async (id, approval) => {
    const data = {
      approval,
    };

    const response = await updateRiderStatus(id, data);
    console.log("updateRiderStatus response", response);

    if (!response.error) {
      // Show modal depend on status
      dispatch(handleModalStatus(response.approval));
    } else {
      // Show error message
      alert("Something went wrong! Please check the logs.");
      console.log(response.error);
    }
  };

  useEffect(() => {
    if (data === "rider") loadRiders();
  }, []);

  if (isLoading) return "Loading ...";
  return (
    <>
      {/* Row Container */}
      {list.map((item, index) => (
        <Box key={index} sx={rowStyle}>
          <Box sx={{ ...colStyle, justifyContent: "center" }}>
            <Typography variant="p" fontWeight="600" textAlign="center">
              Driver’s License
            </Typography>
            <Box width="120px" height="60px">
              <img
                src={item.user.photo_url}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={contentStyle} mb="10px">
              <Typography sx={titleStyle}>Rider’s Full Name</Typography>
              <Typography sx={subtitleStyle}>
                {item.user.first_name} {item.user.last_name}
              </Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={titleStyle}>Motor Vehicle Brand</Typography>
              <Typography sx={subtitleStyle}>{item.brand}</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={contentStyle} mb="10px">
              <Typography sx={titleStyle}>Address</Typography>
              <Typography sx={subtitleStyle}>{item.address}</Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={titleStyle}>Model</Typography>
              <Typography sx={subtitleStyle}>{item.model}</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={contentStyle} mb="10px">
              <Typography sx={titleStyle}>Mobile Number</Typography>
              <Typography sx={subtitleStyle}>{item.user.mobile}</Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={titleStyle}>Year</Typography>
              <Typography sx={subtitleStyle}>2021</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={contentStyle} mb="10px">
              <Typography sx={titleStyle}>Email Address</Typography>
              <Typography sx={subtitleStyle}>{item.user.email}</Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={titleStyle}>OR Number</Typography>
              <Typography sx={subtitleStyle}>{item.or_number}</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={contentStyle} mb="10px">
              <Typography sx={titleStyle}>Driver’s License Number</Typography>
              <Typography sx={subtitleStyle}>{item.license_number}</Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={titleStyle}>Plate number</Typography>
              <Typography sx={subtitleStyle}>{item.plate_number}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...colStyle,
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{
                background: "#F0BB62",
                width: "100%",
                height: "25px",
                "&:hover": { background: "#aa7316" },
                "&:hover > span": { color: "#fff" },
              }}
              onClick={() => handleUpdateStatus(item.id, "Hold")}
            >
              <Typography variant="p" color="initial" fontWeight="600">
                Hold
              </Typography>
            </Button>
            <Button
              sx={{
                background: "#D52B1D",
                width: "100%",
                height: "25px",
                "&:hover": { background: "#860f06" },
                "&:hover > span": { color: "#fff" },
              }}
              onClick={() => handleUpdateStatus(item.id, "Declined")}
            >
              <Typography variant="p" color="initial" fontWeight="600">
                Decline
              </Typography>
            </Button>
            <Button
              sx={{
                background: "#00FF19",
                width: "100%",
                height: "25px",
                "&:hover": { background: "#02a512" },
                "&:hover > span": { color: "#fff" },
              }}
              onClick={() => handleUpdateStatus(item.id, "Approved")}
            >
              <Typography variant="p" color="initial" fontWeight="600">
                Approve
              </Typography>
            </Button>
          </Box>
        </Box>
      ))}

      <AlertModal />
    </>
  );
};

export default Applicant;
