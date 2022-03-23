import { styled, Typography, TypographyProps } from '@mui/material';
import React from 'react';

type SideBarItemProperties = TypographyProps;

const StyledTypography = styled(Typography)`
  font-size: 10px;
  line-height: 12px;
  padding-top: 4px;
  text-align: center;
  user-select: none;
`;

export const SideBarItemLabel: React.FC<SideBarItemProperties> = (props) => {
  const { children, ...other } = props;

  return <StyledTypography {...other}>{children}</StyledTypography>;
};

export default SideBarItemLabel;
