import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useRestaurants } from "../../../hooks/useRestaurants";
import { handleModalStatus } from "../../../features/modalSlice";

import rest2 from "../../../scenes/restaurant/rest2.png";
import AlertModal from "../../globalComponents/AlertModal";

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
};

const Applicant = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState(null);
  const { getRestaurants, updateRestaurantStatus } = useRestaurants();

  const loadRestaurants = async () => {
    const response = await getRestaurants({
      with: "restaurants",
      approval: "Applied",
    });
    console.log("getRestaurants response", response);
    setList(response);
    setIsLoading(false);
  };

  const handleUpdateStatus = async (id, approval) => {
    const data = {
      approval,
    };

    const response = await updateRestaurantStatus(id, data);
    console.log("updateRestaurantStatus response", response);

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
    loadRestaurants();
  }, []);

  if (isLoading) return "Loading ...";

  return (
    <>
      {/* Row Container */}
      {list?.map((item, index) => (
        <Box key={index} sx={rowStyle}>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Typography variant="h5" fontWeight="600" color="#00FF19" mb="3px">
              Logo
            </Typography>

            <img
              src={item.restaurants[0].photo_url}
              style={{ width: "70px", height: "70px", borderRadius: "5px" }}
              alt=""
            />
          </Box>
          <Box sx={colStyle}>
            <Box sx={contentStyle} mb="10px">
              <Typography sx={titleStyle}>Restaurant Name</Typography>
              <Typography sx={subtitleStyle}>Jollibee</Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={titleStyle}>Owner’s Full Name</Typography>
              <Typography
                sx={subtitleStyle}
              >{`${item.first_name} ${item.last_name}`}</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={contentStyle} mb="10px">
              <Typography sx={titleStyle}>Address</Typography>
              <Typography variant="p" sx={subtitleStyle}>
                #123 Brgy Angilan, Panglao
              </Typography>
            </Box>
            <Box sx={contentStyle}>
              <Typography sx={titleStyle}>Owner’s Contact number</Typography>
              <Typography sx={subtitleStyle}>{item.mobile}</Typography>
            </Box>
          </Box>
          <Box sx={colStyle}>
            <Box sx={contentStyle} mb="10px">
              <Typography sx={titleStyle}>Mobile Number</Typography>
              <Typography sx={subtitleStyle}>09179876543</Typography>
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
              <Box sx={{ ...contentStyle, alignItems: "flex-start" }}>
                <Typography sx={{ ...titleStyle, textAlign: "left" }}>
                  Email Address
                </Typography>
                <Typography sx={subtitleStyle}>info@jollibee.com.ph</Typography>
              </Box>
              <Box sx={contentStyle}>
                <Typography sx={titleStyle}>Type of Cuisine</Typography>
                <Typography sx={subtitleStyle}>Fast Food (Asian)</Typography>
              </Box>
            </Box>
            <Box sx={{ ...contentStyle, alignItems: "flex-start" }}>
              <Typography sx={{ ...titleStyle, textAlign: "left" }}>
                Short Restaurant Description
              </Typography>
              <Typography sx={subtitleStyle}>
                Fast Food Chain - with chicken specialty and meals
              </Typography>
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
