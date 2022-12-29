import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { data } from "../data/barChartDataCPU";

const BarChartCPUTraffic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const format = () => ``;

  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      colors={["#E6B325", "#FDE9B1"]}
      colorBy="id"
      valueFormat={format}
      //   labelFormat={format}
      //   tooltipFormat={format}
      //   axisLeft={{ format }}
      //   sliceLabel={(item) => `${item.value}%`}
      keys={["hot dog", "burger"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.5}
      innerPadding={3}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      defs={
        [
          // {
          //   id: "dots",
          //   type: "patternDots",
          //   background: "inherit",
          //   color: "#38bcb2",
          //   size: 4,
          //   padding: 1,
          //   stagger: true,
          // },
          // {
          //   id: "lines",
          //   type: "patternLines",
          //   background: "inherit",
          //   color: "#eed312",
          //   rotation: -45,
          //   lineWidth: 6,
          //   spacing: 10,
          // },
        ]
      }
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "country",
        // legendPosition: "middle",
        // legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "food",
        // legendPosition: "middle",
        // legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChartCPUTraffic;
