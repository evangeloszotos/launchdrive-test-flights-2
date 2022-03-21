import React from 'react';
import { Grid, GridProps, styled } from '@mui/material';

interface TemplatePreviewDialogContentProps extends GridProps {
  templateWidth?: string;
}

const StyledGrid = styled(Grid)`
  margin-top: 2.5vh;
  background-color: #fffffff2;
`;

export const TemplatePreviewDialogContent: React.FC<TemplatePreviewDialogContentProps> = (props) => {
  const { templateWidth, children, ...other } = props;

  return (
    <StyledGrid container={true} direction="row" justifyContent="center" {...other}>
      <Grid item={true} width={templateWidth} height="full" position="relative">
        {children}
      </Grid>
    </StyledGrid>
  );
};

TemplatePreviewDialogContent.defaultProps = {
  templateWidth: '800px',
};

export default TemplatePreviewDialogContent;
