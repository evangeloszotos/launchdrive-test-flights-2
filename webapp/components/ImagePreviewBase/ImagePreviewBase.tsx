import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface ImagePreviewBaseProps {
  emptyContent: React.ReactElement;
  defaultContent: React.ReactElement;
  overlayContent: React.ReactElement;
  overlayColor: string;
}

const StyledBox = styled<React.FC<ImagePreviewBaseProps>>(Box)((props) => {
  const { propName1 = 'default', propName2 = 42 } = props;

  return {
    color: 'red',
  };
});

/*
const StyledBox = styled(Box)`
  color: red;
`;
*/

export const ImagePreviewBase: React.FC<ImagePreviewBaseProps> = (props) => {
  const {
    children,
    propName1 = 'default',
    propName2 = 42,
    propName3,
    propName4,
    propName5,
    propName6,
    propName7,
    propName8,
    propName9,
    ...other
  } = props;

  return <StyledBox {...props}> {children} </StyledBox>;
};

export default ImagePreviewBase;
