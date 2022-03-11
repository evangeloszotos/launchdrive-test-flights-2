import React from "react";
import { Box, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

export function SideBarText(props) {
  const { label, className } = props;

  return (
    <Box className={className} sx={{ mx: 2, typography: "subtitle2" }}>
      {label}
    </Box>
  );
}
SideBarText.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};
SideBarText.defaultProps = {
  className: "",
  label: "",
};

export default SideBarText;
