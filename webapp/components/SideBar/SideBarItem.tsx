import { alpha, Box, styled } from '@mui/material';
import React from 'react';
import Centered from '../Centered';
import { theme } from '../../mui-theme';

export interface SideBarItemProperties {
  onClick?: () => void;
  isSelected?: boolean;
  backgroundColor?: string;
  backgroundColorSelected?: string;
  color?: string;
  colorSelected?: string;
}

const StyledBox = styled<React.FC<SideBarItemProperties>>(Box)((props) => {
  const {
    isSelected,
    backgroundColor = 'transparent',
    backgroundColorSelected = alpha(theme.palette.primary.main, 0.12),
    color = theme.palette.grey['600'],
    colorSelected = theme.palette.primary.main,
  } = props;

  return {
    cursor: 'pointer',
    backgroundColor: isSelected ? backgroundColorSelected : backgroundColor,
    color: isSelected ? colorSelected : color,
    padding: '0.5rem',
  };
});

export const SideBarItem: React.FC<SideBarItemProperties> = (props) => {
  const { children, onClick, ...other } = props;

  return (
    <StyledBox {...other} onClick={onClick}>
      <Centered>{children}</Centered>
    </StyledBox>
  );
};

export default SideBarItem;
