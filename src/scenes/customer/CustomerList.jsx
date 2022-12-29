import { Box, Typography } from "@mui/material";
import React from "react";
import Statistics from "../../components/globalComponents/statistics/Statistics";
import TableComponent from "../../components/customerComponents/table/TableComponent";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const colorTheme = {
  main: "#00FF19",
  button1: {
    text: "DELETE",
    bgColor: "#535353",
  },
  button2: {
    text: "UPDATE",
    bgColor: "#535353",
  },
};

const CustomerList = () => {
  return (
    <Box p={"20px"} bgcolor={"#454d55"}>
      <Statistics />
      <Box bgcolor="#151C26">
        <Typography
          variant="h3"
          color="#FFF"
          fontWeight={600}
          textAlign="center"
          //   mb="10px"
          p="20px"
        >
          USER LIST - USER ACTION
        </Typography>
        <Box bgcolor="#151C26" p="5px 15px" maxHeight="755px" overflow="auto">
          {/* the data is need in a array form */}
          <TableComponent data={array} height={660} />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerList;
