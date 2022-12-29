import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { data } from "../data/pieDataPageLikes";

const PieChartPageLikes = () => {
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
      colors={["#1DA1F2", "#FF0000", "white", "#3360FF", "#D62976"]}
      colorBy="index"
      valueFormat={format}
      sliceLabel={(item) => `${item.value}%`}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      sortByValue={true}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0.2"]],
      }}
      enableArcLinkLabels={true}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[]}
      fill={[]}
      legends={[]}
    />
  );
};

export default PieChartPageLikes;
