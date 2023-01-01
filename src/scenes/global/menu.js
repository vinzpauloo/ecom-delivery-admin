// Import sidebar images
import menuAdminUser from "../../assets/images/menu-admin-user.png";
import menuCustomers from "../../assets/images/menu-customers.png";
import menuInteractions from "../../assets/images/menu-interactions.png";
import menuOrders from "../../assets/images/menu-orders.png";
import menuRestaurants from "../../assets/images/menu-restaurants.png";
import menuRiders from "../../assets/images/menu-riders.png";
import menuSettings from "../../assets/images/menu-settings.png";
import menuAdminUserHover from "../../assets/images/menu-admin-user-hover.png";
import menuCustomersHover from "../../assets/images/menu-customers-hover.png";
import menuInteractionsHover from "../../assets/images/menu-interactions-hover.png";
import menuOrdersHover from "../../assets/images/menu-orders-hover.png";
import menuRestaurantsHover from "../../assets/images/menu-restaurants-hover.png";
import menuRidersHover from "../../assets/images/menu-riders-hover.png";
import menuSettingsHover from "../../assets/images/menu-settings-hover.png";

// Sidebar menu array
const mainMenu = [
  {
    title: "Admin User",
    icon: menuAdminUser,
    iconHover: menuAdminUserHover,
    subMenu: [
      {
        title: "Dashboard",
        to: "/admin",
      },
      // {
      //   title: "Check Users",
      //   to: "/",
      // },
      // {
      //   title: "Create User",
      //   to: "/",
      // },
      // {
      //   title: "Change Permissions",
      //   to: "/",
      // },
    ],
  },
  {
    title: "Restaurants",
    icon: menuRestaurants,
    iconHover: menuRestaurantsHover,
    subMenu: [
      // {
      //   title: "Dashboard",
      //   to: "/restaurant",
      // },
      {
        title: "Applicants",
        to: "/restaurant/applicant",
      },
      {
        title: "Restaurants List",
        to: "/restaurant/list",
      },
      {
        title: "Blocked List",
        to: "/restaurant/block",
      },
    ],
  },
  {
    title: "Riders",
    icon: menuRiders,
    iconHover: menuRidersHover,
    subMenu: [
      // {
      //   title: "Dashboard",
      //   to: "/rider",
      // },
      {
        title: "Applicants",
        to: "/rider/applicant",
      },
      {
        title: "Riders List",
        to: "/rider/list",
      },
      {
        title: "Blocked List",
        to: "/rider/block",
      },
    ],
  },
  {
    title: "Customers",
    icon: menuCustomers,
    iconHover: menuCustomersHover,
    subMenu: [
      {
        title: "Dashboard",
        to: "/customer",
      },
      // {
      //   title: "User List",
      //   to: "/customer/list",
      // },
      // {
      //   title: "Banned Users",
      //   to: "/customer/banned",
      // },
    ],
  },
  // {
  //   title: "Integrations",
  //   icon: menuInteractions,
  //   iconHover: menuInteractionsHover,
  //   subMenu: [
  //     {
  //       title: "Main Page",
  //       to: "/integrations",
  //     },
  //     {
  //       title: "Meta",
  //       to: "/",
  //     },
  //     {
  //       title: "Pusher",
  //       to: "/",
  //     },
  //     {
  //       title: "Vonage",
  //       to: "/",
  //     },
  //   ],
  // },
  {
    title: "Settings",
    icon: menuSettings,
    iconHover: menuSettingsHover,
  },
];

export default mainMenu;
