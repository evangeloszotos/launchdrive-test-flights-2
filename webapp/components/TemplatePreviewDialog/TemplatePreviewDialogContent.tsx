import React from 'react';
import { Grid, GridProps, styled } from '@mui/material';

const GridStyled = styled(Grid)`
  margin-top: 2.5vh;
  background-color: #fffffff2;
`;

interface TemplatePreviewDialogContentProps extends GridProps {
  templateWidth?: string;
}

const defaultProps = {
  templateWidth: '800px',
} as TemplatePreviewDialogContentProps;

export const TemplatePreviewDialogContent: React.FC<TemplatePreviewDialogContentProps> = (props) => {
  const { templateWidth, children, ...other } = { ...defaultProps, ...props };

  return (
    <GridStyled container={true} direction="row" justifyContent="center" {...other}>
      <Grid item={true} width={templateWidth} height="full" position="relative">
        {children}
      </Grid>
    </GridStyled>
  );
};
TemplatePreviewDialogContent.defaultProps = defaultProps;

export default TemplatePreviewDialogContent;
