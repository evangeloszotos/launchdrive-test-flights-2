import React, { useState } from 'react';
import { Box, Fade } from '@mui/material';
import { styled } from '@mui/system';

interface HoverOverlayStyleProps {
  overlayBackgroundColor?: string;
}
interface HoverOverlayProps extends HoverOverlayStyleProps {
  overlayContent: React.ReactElement;
  activatorContent?: React.ReactElement;
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

export const HoverOverlay: React.FC<HoverOverlayProps> = (props) => {
  const { activatorContent, children, overlayContent, overlayBackgroundColor, ...other } = props;
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Box
      sx={{ position: 'relative', width: '100%', height: '100%' }}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      {activatorContent ?? children}
      <Fade in={showOverlay}>
        <OverlayBackgroundBox overlayBackgroundColor={overlayBackgroundColor}>{overlayContent}</OverlayBackgroundBox>
      </Fade>
    </Box>
  );
};

export default HoverOverlay;
