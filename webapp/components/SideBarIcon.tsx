import React from "react";
import { Grid, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

export function SideBarIcon(props) {
  const {
    //label,
    icon: IconElement,
    //isExpanded,
    iconProps,
  } = props;

  return (
    <Tooltip title={/*!isExpanded ? label : */ ""} placement="right">
      <Grid container justifyContent="center" alignItems="center">
        <IconElement {...iconProps} />
      </Grid>
    </Tooltip>
  );
}
SideBarIcon.propTypes = {
  //label: PropTypes.string,
  icon: PropTypes.object.isRequired,
  iconProps: PropTypes.object,
  //isExpanded: PropTypes.bool,
};
SideBarIcon.defaultProps = {
  //label: "",
  iconProps: {
    sx: {
      mx: "auto",
    },
  },
  //isExpanded: false,
};

export default SideBarIcon;
