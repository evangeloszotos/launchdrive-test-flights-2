import React from 'react';
import { AppBar, AppBarProps, Grid, styled, Toolbar } from '@mui/material';

interface TemplatePreviewDialogAppBarProps extends AppBarProps {
  startContent: React.ReactNode;
  centerContent: React.ReactNode;
  endContent: React.ReactNode;
}

const StyledAppBar = styled(AppBar)`
  color: #000000de;
  background-color: white;
`;

export const TemplatePreviewDialogAppBar: React.FC<TemplatePreviewDialogAppBarProps> = (props) => {
  const { startContent, centerContent, endContent, ...other } = props;

  return (
    <StyledAppBar position="sticky" elevation={0} {...other}>
      <Toolbar>
        <Grid container={true} direction="row" alignItems="center" paddingY="0.25rem">
          <Grid item={true} sm={4}>
            {startContent}
          </Grid>

          <Grid container={true} item={true} sm={4} justifyContent="center">
            {centerContent}
          </Grid>

          <Grid container={true} item={true} sm={4} justifyContent="flex-end">
            {endContent}
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TemplatePreviewDialogAppBar;
