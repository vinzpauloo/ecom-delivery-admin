import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { data } from "../data/lineChartDataCPU";
import { linearGradientDef } from "@nivo/core";

const LineChartSalesUpdate = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const format = () => ``;

  return (
    <ResponsiveLine
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
      keys={["react", "vue", "elm"]}
      // 1. defining gradients
      defs={[
        // using helpers
        // will inherit colors from current element
        linearGradientDef("gradientA", [
          { offset: 0, color: "inherit" },
          { offset: 100, color: "inherit", opacity: 0 },
        ]),
        linearGradientDef(
          "gradientB",
          [
            { offset: 0, color: "#000" },
            { offset: 100, color: "inherit" },
          ],
          // you may specify transforms for your gradients, e.g. rotations and skews,
          // following the transform attribute format.
          // For instance here we rotate 90 degrees relative to the center of the object.
          {
            gradientTransform: "rotate(90 0.5 0.5)",
          }
        ),
        // using plain object
        {
          id: "gradientC",
          type: "linearGradient",
          colors: [
            { offset: 20, color: "#EEEEEE" },
            { offset: 40, color: "#F9B5D0" },
            { offset: 50, color: "#FF8E9E" },
            { offset: 20, color: "#FF597B" },
          ],
        },
      ]}
      // 2. defining rules to apply those gradients
      fill={[
        // match using object query
        { match: { id: "react" }, id: "gradientA" },
        // match using function
        { match: (d) => d.id === "vue", id: "gradientB" },
        // match all, will only affect 'elm', because once a rule match,
        // others are skipped, so now it acts as a fallback
        { match: "*", id: "gradientC" },
      ]}
      colors={["white"]}
      // colors={["url(#someGradientId)"]}
      colorBy="index"
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enablePoints={true}
      pointSize={10}
      pointColor="white"
      pointBorderWidth={4}
      pointBorderColor="#476DFA"
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.15}
      useMesh={true}
      legends={[]}
    />
  );
};

export default LineChartSalesUpdate;
