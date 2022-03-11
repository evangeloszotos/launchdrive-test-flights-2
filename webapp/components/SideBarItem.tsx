import React from "react";
import { alpha, Box } from "@mui/material";
import PropTypes from "prop-types";
import NextLink from "next/link";
import { theme } from "../mui-theme";

export function SideBarItem(props) {
  const { children, isSelected, onClick } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: isSelected
          ? alpha(theme.palette.primary.main, 0.12)
          : "transparent",
        color: isSelected
          ? theme.palette.primary.main
          : theme.palette.grey["600"],
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
}
SideBarItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};
SideBarItem.defaultProps = {
  children: null,
  isSelected: false,
  onClick: () => {},
};

export default SideBarItem;
