import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "scala",
    label: "scala",
    value: 35,
    color: "hsl(80, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 35,
    color: "hsl(105, 70%, 50%)",
  },
  {
    id: "css",
    label: "css",
    value: 35,
    color: "hsl(254, 70%, 50%)",
  },
];

const PieChartCustomerDashboard = () => {
  const format = (v) => `${v}K`;
  return (
    <ResponsivePie
      data={data}
      valueFormat={format}
      colors={["#FD841F", "#F56EB3", "#00FFF6"]}
      margin={{ top: 160 }}
      innerRadius={0.2}
      cornerRadius={1}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 1]],
      }}
      transitionMode="middleAngle"
      legends={[]}
    />
  );
};

export default PieChartCustomerDashboard;
