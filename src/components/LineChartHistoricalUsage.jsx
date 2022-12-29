import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { linearGradientDef } from "@nivo/core";

const data = [
  {
    id: "japan",
    color: "hsl(96, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 45,
      },
      {
        x: "helicopter",
        y: 76,
      },
      {
        x: "boat",
        y: 94,
      },
      {
        x: "train",
        y: 181,
      },
      {
        x: "subway",
        y: 27,
      },
      {
        x: "bus",
        y: 70,
      },
      {
        x: "car",
        y: 230,
      },
      {
        x: "moto",
        y: 116,
      },
      {
        x: "bicycle",
        y: 19,
      },
      {
        x: "horse",
        y: 130,
      },
      {
        x: "skateboard",
        y: 63,
      },
      {
        x: "others",
        y: 255,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(179, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 75,
      },
      {
        x: "helicopter",
        y: 131,
      },
      {
        x: "boat",
        y: 244,
      },
      {
        x: "train",
        y: 300,
      },
      {
        x: "subway",
        y: 92,
      },
      {
        x: "bus",
        y: 189,
      },
      {
        x: "car",
        y: 253,
      },
      {
        x: "moto",
        y: 298,
      },
      {
        x: "bicycle",
        y: 87,
      },
      {
        x: "horse",
        y: 35,
      },
      {
        x: "skateboard",
        y: 185,
      },
      {
        x: "others",
        y: 31,
      },
    ],
  },
];

const LineChartHistoricalUsage = () => {
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
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      xFormat=" >-"
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
        // legendOffset: 36,
        // legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "count",
        // legendOffset: -40,
        // legendPosition: "middle",
      }}
      enableGridX={false}
      pointSize={5}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      areaOpacity={0}
      useMesh={true}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 33,
          translateY: 46,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChartHistoricalUsage;
