import { ResponsiveStream } from "@nivo/stream";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { linearGradientDef } from "@nivo/core";

const data = [
  {
    Raoul: 82,
    Josiane: 19,
    Marcel: 194,
  },
  {
    Raoul: 192,
    Josiane: 11,
    Marcel: 181,
  },
  {
    Raoul: 127,
    Josiane: 179,
    Marcel: 183,
  },
  {
    Raoul: 35,
    Josiane: 34,
    Marcel: 197,
  },
  {
    Raoul: 140,
    Josiane: 194,
    Marcel: 128,
  },
  {
    Raoul: 85,
    Josiane: 137,
    Marcel: 151,
  },
  {
    Raoul: 119,
    Josiane: 44,
    Marcel: 102,
  },
  {
    Raoul: 161,
    Josiane: 76,
    Marcel: 164,
  },
  {
    Raoul: 174,
    Josiane: 123,
    Marcel: 147,
  },
];

const StreamCustomerDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const format = () => ``;
  return (
    <ResponsiveStream
      data={data}
      keys={["Raoul", "Josiane", "Marcel"]}
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
      // 1. defining gradients
      defs={[
        // using helpers
        // will inherit colors from current element
        linearGradientDef("gradientA", [
          { offset: 0, color: "green" },
          { offset: 100, color: "green", opacity: 0 },
        ]),
        linearGradientDef(
          "gradientB",
          [
            { offset: 0, color: "blue", opacity: 0 },
            { offset: 100, color: "blue", opacity: 0.5 },
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
            { offset: 20, color: "#FF7000", opacity: 0.55 },
            { offset: 40, color: "#FF7000", opacity: 0.55 },
            { offset: 50, color: "#FF7000", opacity: 0.55 },
            { offset: 20, color: "#FF7000", opacity: 0.55 },
          ],
        },
      ]}
      // 2. defining rules to apply those gradients
      fill={[
        // match using object query
        { match: { id: "Raoul" }, id: "gradientA" },
        // match using function
        { match: (d) => d.id === "Josiane", id: "gradientB" },
        // match all, will only affect 'elm', because once a rule match,
        // others are skipped, so now it acts as a fallback
        { match: "*", id: "gradientC" },
      ]}
      colors={["white"]}
      // colors={["url(#someGradientId)"]}
      colorBy="index"
      //   colors={["#FF7000", "#D7419D", "#00D5FF"]}
      margin={{ top: 5, right: 110, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
      }}
      enableGridX={true}
      offsetType="silhouette"
      fillOpacity={0.85}
      borderColor={{ theme: "background" }}
      dotSize={8}
      dotColor={{ from: "color" }}
      dotBorderWidth={2}
      dotBorderColor={{
        from: "color",
        modifiers: [["darker", 0.7]],
      }}
      legends={[]}
    />
  );
};

export default StreamCustomerDashboard;
