import React from 'react';
import { Dialog, DialogProps } from '@mui/material';

import SlideUpTransition from '../SlideUpTransition';

export const TemplatePreviewDialog: React.FC<DialogProps> = (props) => (
  <Dialog
    fullScreen={true}
    scroll="body"
    TransitionComponent={SlideUpTransition}
    {...props}
  />
);

export default TemplatePreviewDialog;
