import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { data } from "../data/pieDataCPU";

const PieChartCPUTraffic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const format = (v) => `${v}%`;

  return (
    <ResponsivePie
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
      colors={["#83AC54", "#B70F12", "white", "#FF9A06", "#621F71"]}
      colorBy="index"
      valueFormat={format}
      //   labelFormat={format}
      //   tooltipFormat={format}
      //   axisLeft={{ format }}
      sliceLabel={(item) => `${item.value}%`}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      sortByValue={true}
      //   padAngle={1}
      activeOuterRadiusOffset={8}
      //   borderWidth={3}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0.2"]],
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        // {
        //   id: "dots",
        //   type: "patternDots",
        //   background: "inherit",
        //   color: "rgba(255, 255, 255, 0.3)",
        //   size: 4,
        //   padding: 1,
        //   stagger: true,
        // },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[]}
    />
  );
};

export default PieChartCPUTraffic;
