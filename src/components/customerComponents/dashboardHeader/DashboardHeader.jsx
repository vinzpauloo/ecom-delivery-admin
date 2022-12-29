import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";

const DashboardHeader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb="20px"
      padding="5px"
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h3" color="#fff" textAlign="center">
          USER AVAILABILITY DASHBOARD
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
