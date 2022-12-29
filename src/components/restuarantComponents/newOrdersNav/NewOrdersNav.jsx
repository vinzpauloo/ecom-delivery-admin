import { Box, Button, Typography } from "@mui/material";
import React from "react";

const NewOrdersNav = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bgcolor={"#2B3443"}
      borderRadius="5px"
      p="15px 25px"
      mb={"10px"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h3" mr={"10px"} fontWeight={600} color={"#00FF19"}>
          New Orders
        </Typography>
        <Typography variant="span" mt={"5px"} fontWeight={300}>
          5 Total as of 12:30pm of 12-06-2022
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Button
          sx={{
            border: "2px solid #00FF19",
            margin: "0 10px",
            padding: "2px 15px",
          }}
        >
          <Typography color={"#00FF19"}>New</Typography>
        </Button>
        <Button
          sx={{
            border: "2px solid #00FF19",
            margin: "0 10px",
            padding: "2px 15px",
          }}
        >
          <Typography color={"#00FF19"}>Cancelled</Typography>
        </Button>
        <Button
          sx={{
            border: "2px solid #00FF19",
            margin: "0 10px",
            padding: "2px 15px",
          }}
        >
          <Typography color={"#00FF19"}>Delivered</Typography>
        </Button>
        <Button
          sx={{
            border: "2px solid #00FF19",
            margin: "0 10px",
            padding: "2px 15px",
          }}
        >
          <Typography color={"#00FF19"}>All</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default NewOrdersNav;
