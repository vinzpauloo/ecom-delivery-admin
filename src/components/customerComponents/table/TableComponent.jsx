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
import { useNavigate } from "react-router-dom";
import React from "react";
import customer from "./customerPic.png";

const tableCellHeadStyle = {
  color: "#E6B325",
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

const TableComponent = ({ data, height }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <TableContainer sx={{ maxHeight: height }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={tableCellHeadStyle}></TableCell>
              <TableCell sx={tableCellHeadStyle}>Full Name</TableCell>
              <TableCell sx={tableCellHeadStyle}>Mobile Number</TableCell>
              <TableCell sx={tableCellHeadStyle}>Email Address</TableCell>
              <TableCell sx={tableCellHeadStyle}>Address</TableCell>
              <TableCell sx={tableCellHeadStyle}></TableCell>
              <TableCell sx={tableCellHeadStyle}></TableCell>
              <TableCell sx={tableCellHeadStyle}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={tableCellBodyStyle}>
                  <img
                    src={customer}
                    style={{ width: "50px", marginTop: "5px" }}
                    alt=""
                  />
                </TableCell>
                <TableCell sx={tableCellBodyStyle}>Valentinno Rossi</TableCell>
                <TableCell sx={tableCellBodyStyle}>
                  (+63) 917 456 7890
                </TableCell>
                <TableCell sx={tableCellBodyStyle}>
                  alexan@1bit.com.ph
                </TableCell>
                <TableCell sx={tableCellBodyStyle}>
                  #123 Mapogi St., Brgy Kapangitan, Bohol
                </TableCell>
                <TableCell sx={tableCellBodyStyle}>
                  <Button
                    sx={{
                      background: "#FD841F",
                      padding: "5px 20px",
                      border: "1px solid #535353",
                      "&:hover": {
                        background: "#aa7316",
                        border: "1px solid #535353",
                        color: "#FFF",
                      },
                    }}
                  >
                    <Typography
                      textTransform={"Capitalize"}
                      fontSize="13px"
                      fontWeight="600"
                    >
                      Hold Account
                    </Typography>
                  </Button>
                </TableCell>
                <TableCell sx={tableCellBodyStyle}>
                  <Button
                    sx={{
                      background: "#FDE9B1",
                      padding: "5px 20px",
                      border: "1px solid #535353",
                      "&:hover": {
                        background: "#860f06",
                        border: "1px solid #535353",
                        color: "#FFF",
                      },
                    }}
                  >
                    <Typography
                      textTransform={"Capitalize"}
                      fontSize="13px"
                      fontWeight="600"
                    >
                      Delete and Ban Account
                    </Typography>
                  </Button>
                </TableCell>
                <TableCell sx={tableCellBodyStyle}>
                  <Button
                    sx={{
                      background: "#E6B325",
                      padding: "5px 20px",
                      border: "1px solid #535353",
                      "&:hover": {
                        background: "#00ff19",
                        border: "1px solid #535353",
                        color: "#FFF",
                      },
                    }}
                    onClick={() => navigate("/customer/orderHistory")}
                  >
                    <Typography
                      textTransform={"Capitalize"}
                      fontSize="13px"
                      fontWeight="600"
                    >
                      Order history
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
