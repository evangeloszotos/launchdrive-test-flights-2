import { Collapse, Stack } from '@mui/material';
import React from 'react';
import { theme } from '../../mui-theme';

interface SideBarProperties {
  expanded?: boolean;
  collapsedWidth?: number;
  backgroundColor?: string;
}

export const SideBar: React.FC<SideBarProperties> = (props) => {
  const {
    expanded = false,
    collapsedWidth = 64,
    backgroundColor = theme.palette.grey['50'],
    children,
  } = props;

  return (
    <Collapse
      orientation="horizontal"
      in={expanded}
      collapsedSize={collapsedWidth}
      timeout={320}
      easing="ease-in-out"
    >
      <Stack
        spacing={2}
        sx={{
          backgroundColor,
        }}
      >
        {children}
      </Stack>
    </Collapse>
  );
};

export default SideBar;
