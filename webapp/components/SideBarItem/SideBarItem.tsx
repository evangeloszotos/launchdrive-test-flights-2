import { alpha, Box, BoxProps, Grid, styled, Tooltip } from '@mui/material';
import React from 'react';
import { theme } from '../../mui-theme';

export interface SideBarItemProperties extends BoxProps {
  onClick?: () => void;
  selected?: boolean;
  backgroundColor?: string;
  backgroundColorSelected?: string;
  color?: string;
  colorSelected?: string;
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
  tooltip?: string;
}

const SidebarItemBase = styled<React.FC<SideBarItemProperties>>(Box)((props) => {
  const {
    selected,
    backgroundColor = 'transparent',
    backgroundColorSelected = alpha(theme.palette.primary.main, 0.12),
    color = theme.palette.grey['600'],
    colorSelected = theme.palette.primary.main,
  } = props;

  return {
    cursor: 'pointer',
    backgroundColor: selected ? backgroundColorSelected : backgroundColor,
    color: selected ? colorSelected : color,
    padding: '0.5rem',
  };
});

export const SideBarItem: React.FC<SideBarItemProperties> = (props) => {
  const { tooltip = '', children, justifyContent = 'center', ...other } = props;

  return (
    <Tooltip title={tooltip} placement="right">
      <SidebarItemBase {...other}>
        <Grid container={true} justifyContent={justifyContent} alignItems="center">
          {children}
        </Grid>
      </SidebarItemBase>
    </Tooltip>
  );
};

export default SideBarItem;
