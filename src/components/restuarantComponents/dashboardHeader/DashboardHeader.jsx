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

const DashboardHeader = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb="20px"
      position="relative"
      padding="5px"
    >
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
              <Typography sx={typographyStyles}>Jollibee</Typography>
              <Typography sx={typographyStyles}>McDonalds</Typography>
              <Typography sx={typographyStyles}>Italiannis</Typography>
              <Typography sx={typographyStyles}>BonChan</Typography>
              <Typography sx={typographyStyles}>Chowking</Typography>
              <Typography sx={typographyStyles}>Andok's</Typography>
              <Typography sx={typographyStyles}>Conti's</Typography>
              <Typography sx={typographyStyles}>Barrio Fiesta</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h3" color="#fff" textAlign="center">
          USER NETFLOW DASHBOARD
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
