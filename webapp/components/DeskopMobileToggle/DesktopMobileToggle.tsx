import React from 'react';
import { styled, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { DesktopWindows, Smartphone } from '@mui/icons-material';

interface DesktopMobileToggleProps {
  onChange: (event: React.MouseEvent<HTMLElement>, value: any) => void;
  value: 'desktop' | 'mobile';
}

const DesktopIconStyled = styled(DesktopWindows)`
  margin-right: 0.75rem;
`;
const SmartphoneIconStyled = styled(Smartphone)`
  margin-right: 0.75rem;
`;
const TypographyStyled = styled(Typography)`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.46px;
`;

export const DesktopMobileToggle: React.FC<DesktopMobileToggleProps> = (props) => {
  const { onChange, value = 'desktop' } = props;

  return (
    <ToggleButtonGroup size="small" value={value} exclusive={true} onChange={onChange}>
      <ToggleButton value="desktop">
        <DesktopIconStyled />
        <TypographyStyled> Desktop </TypographyStyled>
      </ToggleButton>
      <ToggleButton value="mobile">
        <SmartphoneIconStyled />
        <TypographyStyled> Mobile </TypographyStyled>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default DesktopMobileToggle;
