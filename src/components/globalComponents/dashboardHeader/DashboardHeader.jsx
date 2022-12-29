import { Box } from "@mui/system";
import React from "react";
import { styled, withStyles } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#454D55",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    margin: "5px",
  },
  minHeight: "0px !important",
  margin: "0",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#454D55",
}));

const typographyStyles = {
  borderTop: "1px solid #fff",
  textAlign: "center",
  padding: "5px 0",
  "&:hover": {
    cursor: "pointer",
  },
};

const DashboardHeader = ({ title, restaurantData = [], orderStatus = [] }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={restaurantData.length === 0 ? "center" : "space-between"}
      mb="20px"
      position="relative"
      padding="5px"
    >
      {restaurantData.length !== 0 ? (
        <Box position="relative" zIndex="10">
          <Box
            position="absolute"
            top="-15px"
            height="10px !important"
            width="250px"
          >
            <Accordion expanded={expanded} onChange={handleChange}>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Restaurants</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {restaurantData.map((item, index) => (
                  <Typography key={index} sx={typographyStyles}>
                    {item}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      ) : null}

      <Box display="flex" alignItems="center" justifyContent="center">
        {orderStatus.length === 0 ? (
          <Typography
            variant="h3"
            color="#fff"
            textAlign="center"
            textTransform="uppercase"
          >
            {title}
          </Typography>
        ) : (
          orderStatus.map((item, index) => (
            <Box key={index} display="flex" alignItems="center" ml="70px">
              <Box
                height="15px"
                width="15px"
                mr="5px"
                sx={{ backgroundColor: item.color }}
              ></Box>
              <Typography pt="3px">{item.title}</Typography>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default DashboardHeader;
