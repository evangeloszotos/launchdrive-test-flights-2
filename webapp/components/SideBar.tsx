import {Stack} from "@mui/material";
import React from "react";
import {theme} from "../mui-theme";

export const SideBar: React.FC<any> = (props) => {
  const { children } = props;

  return (
    <Stack spacing={2} sx={{
      backgroundColor: theme.palette.grey["50"],
      width: 64
    }}>
      {children}
    </Stack>
  );
};

export default SideBar;
