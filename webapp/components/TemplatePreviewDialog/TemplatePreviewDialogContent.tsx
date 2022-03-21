import React from 'react';
import { Grid, GridProps } from '@mui/material';

interface TemplatePreviewDialogContentProps extends GridProps {
  templateWidth: string;
}

export const TemplatePreviewDialogContent: React.FC<TemplatePreviewDialogContentProps> = (props) => {
  const { templateWidth = '800px', children, ...other } = props;

  return (
    <Grid container={true} direction="row" justifyContent="center" {...other}>
      <Grid item={true} width={templateWidth} height="full" position="relative">
        {children}
      </Grid>
    </Grid>
  );
};

export default TemplatePreviewDialogContent;
