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

const InlineBox = styled(Box)`
  display: inline-block;
`;

export const HoverOverlay: React.FC<HoverOverlayProps> = (props) => {
  const { activatorContent, children, overlayContent, ...other } = props;
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <InlineBox
      sx={{ position: 'relative' }}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <InlineBox>{activatorContent ?? children}</InlineBox>
      <Fade in={showOverlay}>
        <OverlayBackgroundBox>{overlayContent}</OverlayBackgroundBox>
      </Fade>
    </InlineBox>
  );
};

export default HoverOverlay;
