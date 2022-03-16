import { Collapse, Stack } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { theme } from "../mui-theme";

export function SideBar(props) {
  const { children, isExpanded, collapsedWidth } = props;

  return (
    <Collapse
      orientation="horizontal"
      in={isExpanded}
      collapsedSize={collapsedWidth}
      timeout={320}
      easing="ease-in-out"
    >
      <Stack
        spacing={2}
        sx={{
          backgroundColor: theme.palette.grey["50"],
        }}
      >
        {children}
      </Stack>
    </Collapse>
  );
}
SideBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isExpanded: PropTypes.bool,
  collapsedWidth: PropTypes.number,
};
SideBar.defaultProps = {
  className: "",
  children: null,
  isExpanded: false,
  collapsedWidth: 64,
};

export default SideBar;
