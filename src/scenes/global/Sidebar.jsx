import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  GlobalStyles,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import mainMenu from "./menu";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import fmLogo from "../../assets/images/logo.png";
import fmLogoCollapsed from "../../assets/images/logo-collapsed.png";
import { useDispatch } from "react-redux";
import { adjustWidth } from "../../features/orderHistoryWidthAdjust";

const Item = ({
  title,
  icon,
  iconHover,
  subMenu,
  selected,
  setSelected,
  isCollapsed,
  anchorEl,
  anchorId,
  handleClose,
  handleClick,
  navigate,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => selected != title && setSelected(title)}
    >
      <Box
        component="a"
        href={"#"}
        onClick={handleClick}
        id={anchorId}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          width: "100%",
          height: "100%",
        }}
      />

      {!isCollapsed ? (
        <>
          <Typography
            sx={{
              color: "#D9D9D9",
              display: "inline-block",
              fontSize: "16px",
              letterSpacing: "0.3em",
              textAlign: "center",
              textTransform: "uppercase",
              width: "85%",
            }}
          >
            {title}
          </Typography>
          <IconButton
            sx={{
              color: "#D9D9D9",
              padding: "0 !important",
              width: "15%",
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </>
      ) : (
        <Box position="relative">
          <Box textAlign="center">
            <Box
              className="menuIconMain"
              component="img"
              sx={{
                height: 25,
                width: "auto",
                transition: "all 0.2s ease-in-out",
              }}
              alt={title}
              src={icon}
            />
          </Box>
          <Box
            className="menuIconHover"
            sx={{
              opacity: "0",
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translate(-50%)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 25,
                width: "auto",
              }}
              alt={title}
              src={iconHover}
            />
          </Box>
        </Box>
      )}

      {anchorEl && subMenu && (
        <MuiMenu
          anchorEl={anchorEl}
          open={selected === title}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{
            ".MuiPaper-root": {
              background: `${colors.primary[400]}`,
              border: "1px solid #D9D9D9",
              borderRadius: 0,
              boxShadow: "none",
              left: "0 !important",
              width: "270px",
              textTransform: "uppercase",
            },
            ".MuiPaper-root ul li": {
              color: "#D9D9D9",
              display: "block",
              letterSpacing: "0.3em",
              textAlign: "center",
              padding: "3px",
            },
          }}
        >
          {/* Sub menu title */}
          <Typography
            sx={{
              color: "#D9D9D9",
              display: "inline-block",
              fontSize: "16px",
              letterSpacing: "0.3em",
              textAlign: "center",
              textTransform: "uppercase",
              width: "100%",
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              color: "#D9D9D9",
              padding: "0 !important",
              position: "absolute",
              top: 10,
              right: 20,
              lineHeight: 0,
            }}
          >
            <ExpandMoreIcon />
          </Box>

          {subMenu?.map((item, index) => {
            return (
              <MuiMenuItem
                key={index}
                onClick={() => {
                  selected === title && setSelected("");
                  navigate(item.to);
                }}
              >
                {item.title}
              </MuiMenuItem>
            );
          })}
        </MuiMenu>
      )}
    </MenuItem>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  // Menu popover states/events
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    console.log("setAnchorEl", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isCollapsed) {
    dispatch(adjustWidth({ width: "1750px", slide: 3.4 }));
  } else {
    dispatch(adjustWidth({ width: "1570px", slide: 3 }));
  }

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.5)",
          position: "fixed",
          ...(!isCollapsed ? { width: "270px" } : { width: "80px" }),
          transition: "all 0.2s ease-in-out",
        },

        "& .pro-sidebar-layout": {
          borderLeft: "1px solid #D9D9D9",
          borderRight: "1px solid #D9D9D9",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 20px !important",
        },
      }}
    >
      <GlobalStyles
        styles={{
          ".MuiPopover-root": {
            backgroundColor: "rgb(0 0 0 / 60%)",
          },
        }}
      />
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              ...(!isCollapsed && { borderBottom: "1px solid #D9D9D9" }),
              color: colors.grey[100],
              height: 55,
            }}
          >
            {!isCollapsed ? (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  component="img"
                  sx={{
                    height: 45,
                    width: "auto",
                  }}
                  alt="Foodmonkey - Admin"
                  src={fmLogo}
                />

                <IconButton
                  sx={{
                    bgcolor: "#D9D9D9",
                    border: "1px solid #ffffff",
                    borderRadius: "2px !important",
                    color: "#3D3D3D",
                    padding: "2px !important",
                    "&:hover": {
                      bgcolor: "#3D3D3D",
                      color: "#FFFFFF",
                    },
                  }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            ) : (
              <Box textAlign="center">
                <Box
                  component="img"
                  sx={{
                    height: 40,
                    width: "auto",
                  }}
                  alt="Foodmonkey - Admin"
                  src={fmLogoCollapsed}
                />
              </Box>
            )}
          </MenuItem>

          <Box
            sx={{
              ...(!isCollapsed
                ? {
                    "& .pro-inner-item": {
                      borderBottom: "1px solid #D9D9D9",
                      padding: "8px 20px !important",
                    },
                    "& .pro-inner-item:hover": {
                      bgcolor: "#ffffff",
                      color: `${colors.primary[400]} !important`,
                      transition: "all 0.2s ease-in-out",
                    },
                  }
                : {
                    marginTop: 1,
                    "& .pro-inner-item:hover .menuIconMain": {
                      opacity: 0,
                    },
                    "& .pro-inner-item:hover .menuIconHover": {
                      opacity: 1,
                    },
                  }),
              "& .pro-inner-item:hover p, & .pro-inner-item:hover button": {
                color: `${colors.primary[400]}`,
              },
              "& .pro-menu-item:last-child": {
                ...(!isCollapsed && { borderTop: "1px solid #D9D9D9" }),
                position: "absolute",
                bottom: 0,
                width: "100%",
              },
            }}
          >
            {mainMenu.map((item, index) => {
              return (
                <Item
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  iconHover={item.iconHover}
                  subMenu={item.subMenu}
                  selected={selected}
                  setSelected={setSelected}
                  isCollapsed={isCollapsed}
                  anchorEl={anchorEl}
                  anchorId={index}
                  handleClose={handleClose}
                  handleClick={handleClick}
                  navigate={navigate}
                />
              );
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
