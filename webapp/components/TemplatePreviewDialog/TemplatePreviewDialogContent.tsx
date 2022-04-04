import React from 'react';
import { Grid, GridProps, styled } from '@mui/material';

const GridStyled = styled(Grid)`
  margin-top: 2.5vh;
  background-color: #fffffff2;
`;

interface TemplatePreviewDialogContentProps extends GridProps {
  templateWidth?: string;
}

export const TemplatePreviewDialogContent: React.FC<
  TemplatePreviewDialogContentProps
> = (props) => {
  const { templateWidth = '800px', children, ...other } = props;

  return (
    <GridStyled
      container={true}
      direction="row"
      justifyContent="center"
      {...other}
    >
      <Grid item={true} width={templateWidth} height="full" position="relative">
        {children}
      </Grid>
    </GridStyled>
  );
};

export default TemplatePreviewDialogContent;
