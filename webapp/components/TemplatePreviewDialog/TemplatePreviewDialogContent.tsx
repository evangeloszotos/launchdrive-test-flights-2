import React from 'react';
import { Box, Stack, StackProps } from '@mui/material';

interface TemplatePreviewDialogContentProps extends StackProps {
  templateWidth: string;
}

export const TemplatePreviewDialogContent: React.FC<TemplatePreviewDialogContentProps> = (props) => {
  const { templateWidth, children, ...other } = props;

  return (
    <Stack direction="row" justifyContent="center" {...other}>
      <Box width={templateWidth} height="full" position="relative">
        {children}
      </Box>
    </Stack>
  );
};

export default TemplatePreviewDialogContent;
