import { alpha, Box } from '@mui/material';
import React from 'react';
import Centered from '../Centered';
import { theme } from '../../mui-theme';

interface SideBarItemProperties {
  onClick?: () => void;
  isSelected?: boolean;
  backgroundColor?: string;
  backgroundColorSelected?: string;
  color?: string;
  colorSelected?: string;
}

export const SideBarItem: React.FC<SideBarItemProperties> = (props) => {
  const {
    children,
    onClick,
    isSelected,
    backgroundColor = 'transparent',
    backgroundColorSelected = alpha(theme.palette.primary.main, 0.12),
    color = theme.palette.grey['600'],
    colorSelected = theme.palette.primary.main,
  } = props;

  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        backgroundColor: isSelected ? backgroundColorSelected : backgroundColor,
        color: isSelected ? colorSelected : color,
      }}
      p={1}
    >
      <Centered>{children}</Centered>
    </Box>
  );
};

export default SideBarItem;
