import React from "react";
import { alpha, Box } from "@mui/material";
import PropTypes from "prop-types";
import NextLink from "next/link";
import { theme } from "../mui-theme";

export function SideBarLinkItem(props) {
  const { children, href, isSelected } = props;

  return (
    <NextLink key={href} href={href ?? "#"}>
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
      >
        {children}
      </Box>
    </NextLink>
  );
}
SideBarLinkItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  href: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};
SideBarLinkItem.defaultProps = {
  children: [],
  isSelected: false,
};

export default SideBarLinkItem;
