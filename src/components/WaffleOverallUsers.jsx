import React, { useEffect, useState } from "react";
import { ResponsiveWaffle } from "@nivo/waffle";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
// import { data } from "../data/waffleDataOverallUsers";
import { useOrders } from "../hooks/useOrders";

const WaffleOverallUsers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const format = () => ``;

  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [forDelivery, setForDelivery] = useState([]);
  const [canceledOrders, setCanceledOrders] = useState([]);
  const [receivedOrders, setReceivedOrders] = useState([]);

  const { getOrders } = useOrders();

  const loadDeliveredOrders = async (status) => {
    const params = { status: status };
    const response = await getOrders(params);
    console.log("Delivered Orders", response.data);
    setDeliveredOrders(response.data);
  };

  const loadForDelivery = async (status) => {
    const params = { status: status };
    const response = await getOrders(params);
    console.log("For Delivery Orders", response.data);
    setForDelivery(response.data);
  };

  const loadCanceled = async (status) => {
    const params = { status: status };
    const response = await getOrders(params);
    console.log("Canceled Orders", response.data);
    setCanceledOrders(response.data);
  };

  const loadReceived = async (status) => {
    const params = { status: status };
    const response = await getOrders(params);
    console.log("Received Orders", response.data);
    setCanceledOrders(response.data);
  };

  useEffect(() => {
    loadDeliveredOrders("delivered");
    loadForDelivery("otw, preparing");
    loadCanceled("canceled");
    loadReceived("received");
  }, []);

  const data = [
    {
      id: "Delivered",
      label: "Delivered",
      value: [deliveredOrders.length],
      color: "#00FF19",
    },
    {
      id: "For Delivery",
      label: "For Delivery",
      value: [forDelivery.length],
      color: "#E6B325",
    },
    {
      id: "Canceled",
      label: "Canceled",
      value: [canceledOrders.length],
      color: "#D52B1D",
    },
    {
      id: "Guest Users",
      label: "Guest Users",
      value: 5,
      // color: "#a1cfff",
    },
    {
      id: "Ordering",
      label: "Ordering",
      value: [receivedOrders.length],
      // color: "#a1cfff",
    },
  ];

  return (
    <>
      <ResponsiveWaffle
        data={data}
        total={100}
        rows={6}
        columns={26}
        fillDirection="top"
        padding={4}
        margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
        //   colors={{ scheme: "nivo" }}
        colors={["#00FF19", "#E6B325", "#D52B1D", "#50514E", "#B3B3B3"]}
        colorBy="id"
        //   valueFormat={format}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={11}
        legends={[]}
      />
      {console.log(deliveredOrders.length)}
    </>
  );
};

export default WaffleOverallUsers;
