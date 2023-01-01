import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { React, useEffect, useState } from "react";
import { tokens } from "../../theme";
import { useAuthentication } from "../../hooks/useAuthentication";
import Clock from "react-live-clock";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const sxNewMsgCount = {
  position: "absolute",
  top: "47%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const sxNewNotifCount = {
  position: "absolute",
  top: "-2px",
  right: "-2px",
  backgroundColor: "#343A40",
  border: "2px solid #FFFFFF",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  display: "inline-block",
  width: "17px",
  height: "17px",
};

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [today] = useState(new Date());
  const date = today.toLocaleDateString("en-US").replace(/[/]/g, " | ");
  const { logout } = useAuthentication();

  return (
    <Box
      display="flex"
      justifyContent="end"
      p={1}
      backgroundColor={colors.primary[400]}
      height="65px"
      boxShadow="5px 4px 4px rgb(0 0 0 / 50%)"
    >
      {/* ICONS */}
      <Box display="flex" alignItems="center" gap={3}>
        {/* <IconButton style={{ backgroundColor: "transparent", padding: 0 }}>
          <ChatBubbleOutlineIcon fontSize={"large"} />
          <Typography
            variant="span"
            color="#E6B325"
            fontWeight="600"
            sx={sxNewMsgCount}
          >
            3
          </Typography>
        </IconButton>
        <IconButton style={{ backgroundColor: "transparent", padding: 0 }}>
          <NotificationsOutlinedIcon fontSize={"large"} />
          <Typography
            variant="span"
            color="#E6B325"
            fontWeight="600"
            sx={sxNewNotifCount}
          >
            3
          </Typography>
        </IconButton> */}
        <IconButton
          style={{ backgroundColor: "transparent", padding: 0 }}
          onClick={() => logout()}
        >
          <PersonOutlinedIcon fontSize={"large"} />
        </IconButton>

        <div
          style={{
            fontSize: "16px",
            border: "1px #D9D9D9 solid",
            borderRadius: "5px",
            background: "#1A2433",
            padding: "8px",
            height: "40px",
            width: "210px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ borderRight: "2px #D9D9D9 solid", paddingRight: "10px" }}
          >
            {date}
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Clock format={"h:mm A"} ticking={true} />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Topbar;
