import React from 'react';
import Image, { ImageProps } from 'next/image';
import { styled } from '@mui/material';
import { CenteredHorizontallyOnly } from '../Centered/Centered';

const StyledImage = styled('img')`
  max-width: 100%;
`;

export const TemplatePreviewDialogImage: React.FC<ImageProps> = (props) => (
  /* <Image width="100%" height="100%" layout="responsive" objectFit="contain" {...props} /> */
  <CenteredHorizontallyOnly>
    <StyledImage {...props} />
  </CenteredHorizontallyOnly>
);

export default TemplatePreviewDialogImage;
