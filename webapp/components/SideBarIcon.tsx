import React from "react";
import { Box, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

export function SideBarIcon(props) {
  const {
    label,
    icon: IconElement,
    isExpanded,
    iconStyles,
    width,
    height,
  } = props;

  return (
    <Tooltip title={!isExpanded ? label : ""} placement="right">
      <Box
        sx={{
          height,
          width,
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconElement sx={{ mx: "auto", ...iconStyles }} />
      </Box>
    </Tooltip>
  );
}
SideBarIcon.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.object.isRequired,
  iconStyles: PropTypes.object,
  isExpanded: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};
SideBarIcon.defaultProps = {
  className: "",
  label: "",
  iconStyles: {},
  isExpanded: false,
  width: 64,
  height: 40,
};

export default SideBarIcon;
