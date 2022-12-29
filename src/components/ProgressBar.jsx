import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ width: "30%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }} textAlign="center">
      <Typography>Progress Bar</Typography>
      <LinearProgressWithLabel color="secondary" value={progress} />
      <LinearProgressWithLabel color="warning" value={progress} />
      <LinearProgressWithLabel color="error" value={progress} />
      <LinearProgressWithLabel color="secondary" value={progress} />
      <LinearProgressWithLabel color="warning" value={progress} />
      <LinearProgressWithLabel color="error" value={progress} />
      <LinearProgressWithLabel color="secondary" value={progress} />
    </Box>
  );
};

export default ProgressBar;
