import React from 'react';
import { Box, styled } from '@mui/material';
import { BoxProps } from '@mui/material/Box/Box';
import HoverOverlay from '../HoverOverlay';

interface ImagePreviewStyleProps extends BoxProps {
  border?: string;
  borderRadius?: string;
  height: string | number;
  width?: string | number;
}

interface ImagePreviewBaseProps extends ImagePreviewStyleProps {
  overlayContent: React.ReactElement;
  overlayBackgroundColor?: string;
  overlayEnabled?: boolean;
}

const StyledBox = styled<React.FC<ImagePreviewStyleProps>>(Box)((props) => {
  const { border = '1px dashed #0000003b', borderRadius = '4px', width = '100%', height } = props;

  return {
    border,
    borderRadius,
    overflow: 'hidden',
    width,
    height,
  };
});

export const ImagePreviewBase: React.FC<BoxProps<'div', ImagePreviewBaseProps>> = (props) => {
  const { children, overlayContent, overlayBackgroundColor = '#00000080', overlayEnabled = true, ...other } = props;

  return (
    <StyledBox {...other}>
      <HoverOverlay
        overlayBackgroundColor={overlayBackgroundColor}
        overlayContent={overlayContent}
        disabled={!overlayEnabled}
      >
        {children}
      </HoverOverlay>
    </StyledBox>
  );
};

export default ImagePreviewBase;
