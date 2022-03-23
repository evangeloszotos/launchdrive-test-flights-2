import React, { useState } from 'react';
import { Box, Fade, styled } from '@mui/material';
import { BoxProps } from '@mui/material/Box/Box';

interface HoverOverlayStyleProps {
  overlayBackgroundColor?: string;
}
interface HoverOverlayProps extends HoverOverlayStyleProps, BoxProps {
  overlayContent: React.ReactElement;
  activatorContent?: React.ReactElement;
  disabled?: boolean;
}

const OverlayContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const OverlayBackgroundBox = styled<React.FC<HoverOverlayStyleProps>>(Box)((props) => {
  const { overlayBackgroundColor = '#00000080' } = props;

  return {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: overlayBackgroundColor,
  };
});

export const HoverOverlay: React.FC<HoverOverlayProps> = (props) => {
  const {
    activatorContent,
    children,
    overlayContent,
    overlayBackgroundColor,
    disabled = false,
    onMouseEnter,
    onMouseLeave,
    ...other
  } = props;
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <OverlayContainer
      onMouseEnter={(e) => {
        if (!disabled) setShowOverlay(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        if (!disabled) setShowOverlay(false);
        onMouseLeave?.(e);
      }}
      {...other}
    >
      {activatorContent ?? children}
      <Fade in={showOverlay}>
        <OverlayBackgroundBox overlayBackgroundColor={overlayBackgroundColor}>{overlayContent}</OverlayBackgroundBox>
      </Fade>
    </OverlayContainer>
  );
};

export default HoverOverlay;
