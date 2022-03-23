import React from 'react';
import { Box, styled } from '@mui/material';
import { BoxProps } from '@mui/material/Box/Box';
import HoverOverlay from '../HoverOverlay';

type ImageFileType = any;
interface ImagePreviewStyleProps {
  border?: string;
  borderRadius?: string;
  height: string | number;
  width?: string | number;
}
interface ImagePreviewBaseProps extends ImagePreviewStyleProps {
  emptyContent: React.ReactElement;
  overlayContent: React.ReactElement;
  overlayBackgroundColor?: string;
  overlayEnabled?: boolean;
  value?: ImageFileType;
  renderImage?: (value: ImageFileType) => React.ReactElement;
}

export const StyledImageComponent = styled('img')`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

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
  const {
    border,
    borderRadius,
    children,
    overlayContent,
    overlayBackgroundColor = '#00000080',
    overlayEnabled = true,
    ...other
  } = props;

  return (
    <StyledBox border={border} borderRadius={borderRadius} {...other}>
      <HoverOverlay
        overlayBackgroundColor={overlayBackgroundColor}
        overlayContent={overlayContent}
        enabled={overlayEnabled}
      >
        {children}
      </HoverOverlay>
    </StyledBox>
  );
};

export default ImagePreviewBase;
