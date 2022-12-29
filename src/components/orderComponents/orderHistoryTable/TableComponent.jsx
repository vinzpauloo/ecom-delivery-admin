import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import inasal from "./inasal.png";

const tableCellHeadStyle = {
  color: "#00FF19",
  fontWeight: 600,
  textAlign: "center",
  backgroundColor: "#2B3443",
};
const tableCellBodyStyle = {
  textAlign: "center",
  backgroundColor: "#2B3443",
  padding: "5px",
  fontSize: "10px",
};

const buttonColors = {
  delivered: "#00FF19",
  preparing: "#F0BB62",
  cancelled: "#D52B1D",
  received: "#F0BB62",
};

const TableComponent = ({ data }) => {
  return (
    <Box>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={tableCellHeadStyle}>Restaurant</TableCell>
              <TableCell sx={tableCellHeadStyle}>Rider Name</TableCell>
              <TableCell sx={tableCellHeadStyle}>Customer Name</TableCell>
              <TableCell sx={tableCellHeadStyle}>Mobile Phone</TableCell>
              <TableCell sx={tableCellHeadStyle}>Delivery Address</TableCell>
              <TableCell sx={tableCellHeadStyle}>Order Id</TableCell>
              <TableCell sx={tableCellHeadStyle}>Order Details</TableCell>
              <TableCell sx={tableCellHeadStyle}>Order Time</TableCell>
              <TableCell sx={tableCellHeadStyle}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    ...tableCellBodyStyle,
                    padding: "10px 5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={inasal} style={{ height: "50px" }} alt="" />
                </TableCell>
                <TableCell sx={tableCellBodyStyle}>Mark Marquez</TableCell>
                <TableCell sx={tableCellBodyStyle}>Brandon Boyd</TableCell>
                <TableCell sx={tableCellBodyStyle}>09771234567</TableCell>
                <TableCell sx={tableCellBodyStyle}>
                  #123 Brgy Angilan, Panglao
                </TableCell>
                <TableCell sx={tableCellBodyStyle}>XRF-123</TableCell>
                <TableCell sx={tableCellBodyStyle}>
                  5pcs Lauriat, 4pcs Steamed Siomai, 3 Siopao Asado
                </TableCell>
                <TableCell sx={tableCellBodyStyle}>12:30 pm</TableCell>
                <TableCell sx={tableCellBodyStyle}>
                  <Button
                    sx={{
                      background: buttonColors[item],
                      padding: "2px 15px",
                      border: `1px solid ${buttonColors[item]}`,
                      animation:
                        ["received", "preparing"].includes(item) &&
                        "myEffect 1s ease infinite",
                      "&:hover": {
                        backgroundColor: buttonColors[item],
                        border: `1px solid ${buttonColors[item]}`,
                      },
                      "@keyframes myEffect": {
                        "0%": {
                          background: buttonColors[item],
                        },
                        "100%": {
                          background: "transparent",
                        },
                      },
                    }}
                  >
                    <Typography textTransform={"Capitalize"} fontSize="13px">
                      {item}
                    </Typography>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={12}
        rowsPerPage={2}
        page={2}
        // onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default TableComponent;
