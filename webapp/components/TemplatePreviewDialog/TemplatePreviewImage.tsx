import React from 'react';
import Image, { ImageProps } from 'next/image';

export const TemplatePreviewDialogImage: React.FC<ImageProps> = (props) => (
  <Image width="100%" height="100%" layout="responsive" objectFit="contain" {...props} />
);

export default TemplatePreviewDialogImage;
