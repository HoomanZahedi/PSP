import React from "react";

// Prop Type
import PropTypes from "prop-types";

// MUI
import { Box, useTheme } from "@mui/material";

// --------------------------------------------|| DOT LOADING - COMPONENTS ||-------------------------------------------

const DotLoading = ({ sx }) => {
  const theme = useTheme();

  return (
    <Box width={"100%"} display={"flex"} justifyContent={"center"} py={1}>
      <Box
        className="dot-flashing"
        sx={{
          position: "relative",
          width: "10px",
          height: "10px",
          borderRadius: "5px",
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
          animation: "dot-loading 1s infinite linear alternate",
          animationDelay: "0.5s",
          "&::before, &::after": {
            content: "''",
            display: "inline-block",
            position: "absolute",
            top: 0,
          },
          "&::before": {
            left: "-15px",
            width: "10px",
            height: "10px",
            borderRadius: "5px",
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
            animation: "dot-loading 1s infinite alternate",
            animationDelay: "0s",
          },
          "&::after": {
            left: "15px",
            width: "10px",
            height: "10px",
            borderRadius: "5px",
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
            animation: "dot-loading 1s infinite alternate",
            animationDelay: "1s",
          },
          "@keyframes dot-loading": {
            "0%": {
              backgroundColor: theme.palette.secondary.main,
            },
            "50%, 100%": {
              backgroundColor: "rgba(152, 128, 255, 0.2)",
            },
          },
        }}
      ></Box>
    </Box>
  );
};

DotLoading.prototype = {
  color: PropTypes.string.isRequired,
};
export default DotLoading;
