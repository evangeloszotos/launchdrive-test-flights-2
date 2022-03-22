import React from 'react';
import { Box, styled } from '@mui/material';
import { BoxProps } from '@mui/material/Box/Box';
import Centered from '../Centered';
import HoverOverlay from '../HoverOverlay';

type ImageFileType = any;
interface ImagePreviewStyleProps {
  border?: string;
  borderRadius?: string;
}
interface ImagePreviewBaseProps extends ImagePreviewStyleProps {
  value?: ImageFileType;
  emptyContent: React.ReactElement;
  overlayContent: React.ReactElement;
  renderImage?: (value: ImageFileType) => React.ReactElement;
  overlayBackgroundColor?: string;
}

const StyledImageComponent = styled('img')`
  display: block;
  width: 100%;
`;

const StyledBox = styled<React.FC<ImagePreviewStyleProps>>(Box)((props) => {
  const { border = '1px dashed #0000003b', borderRadius = '4px' } = props;

  return {
    border,
    borderRadius,
    overflow: 'hidden',
  };
});

export const ImagePreviewBase: React.FC<BoxProps<'div', ImagePreviewBaseProps>> = (props) => {
  const {
    border,
    borderRadius,
    value,
    emptyContent,
    renderImage = (src) => <StyledImageComponent src={src} alt="logo" />,
    overlayContent,
    overlayBackgroundColor = '#00000080',
    ...other
  } = props;

  return (
    <StyledBox border={border} borderRadius={borderRadius} {...other}>
      <HoverOverlay overlayBackgroundColor={overlayBackgroundColor} overlayContent={overlayContent}>
        <Centered>{value ? renderImage(value) : emptyContent}</Centered>
      </HoverOverlay>
    </StyledBox>
  );
};

export default ImagePreviewBase;
