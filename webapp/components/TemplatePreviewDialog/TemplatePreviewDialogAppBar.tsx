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
  box-shadow: 0px 1px 0px #dddfe5;
`;

export const TemplatePreviewDialogAppBar: React.FC<TemplatePreviewDialogAppBarProps> = (props) => {
  const { startContent, centerContent, endContent, ...other } = props;

  return (
    <StyledAppBar position="sticky" elevation={0} {...other}>
      <Toolbar>
        <Grid container={true} direction="row" alignItems="center">
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
