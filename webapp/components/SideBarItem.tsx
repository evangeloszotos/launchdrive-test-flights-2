import React from "react";
import {alpha, Box, Tooltip} from "@mui/material";
import NextLink from "next/link";
import {theme} from "../mui-theme";

type SideBarItemInput = {
  label: string;
  icon: any;//JSX.Element;
  selected?: boolean;
  href?: string;
}

export const SideBarItem: React.FC<SideBarItemInput> = (props: SideBarItemInput) => {
  const { label, icon: IconElement, selected, href } = props;

  return (
    <NextLink
      key={label}
      href={href ?? "#"}
    >
      <Tooltip title={label} placement="right">
        <Box
          sx={{
            height: 40,
            backgroundColor: selected ? alpha(theme.palette.primary.main, 0.12) : "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }}
        >
          <IconElement sx={{ mx: "auto", color: selected ? theme.palette.primary.main : theme.palette.grey["600"] }} />
        </Box>
      </Tooltip>
    </NextLink>
  );
};

export default SideBarItem;
