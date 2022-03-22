import React, { useState } from 'react';
import { Box, Fade } from '@mui/material';
import { styled } from '@mui/system';
import { BoxProps } from '@mui/material/Box/Box';

interface HoverOverlayStyleProps {
  overlayBackgroundColor?: string;
}
interface HoverOverlayProps extends HoverOverlayStyleProps {
  overlayContent: React.ReactElement;
  activatorContent?: React.ReactElement;
  enabled?: boolean;
}

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

export const HoverOverlay: React.FC<BoxProps<'div', HoverOverlayProps>> = (props) => {
  const {
    activatorContent,
    children,
    overlayContent,
    overlayBackgroundColor,
    enabled = true,
    onMouseEnter,
    onMouseLeave,
    sx,
    ...other
  } = props;
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Box
      onMouseEnter={(e) => {
        if (enabled) setShowOverlay(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        if (enabled) setShowOverlay(false);
        onMouseLeave?.(e);
      }}
      sx={{ position: 'relative', width: '100%', height: '100%', ...sx }}
      {...other}
    >
      {activatorContent ?? children}
      <Fade in={showOverlay}>
        <OverlayBackgroundBox overlayBackgroundColor={overlayBackgroundColor}>{overlayContent}</OverlayBackgroundBox>
      </Fade>
    </Box>
  );
};

export default HoverOverlay;
