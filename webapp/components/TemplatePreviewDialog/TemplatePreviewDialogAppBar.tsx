import React from 'react';
import { AppBar, AppBarProps, Grid, IconButton, Toolbar, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

interface TemplatePreviewDialogAppBarProps extends AppBarProps {
  templateName: string;
  onClose: () => void;
}

export const TemplatePreviewDialogAppBar: React.FC<TemplatePreviewDialogAppBarProps> = (props) => {
  const { templateName, children, onClose, ...other } = props;

  return (
    <AppBar position="sticky" {...other}>
      <Toolbar disableGutters={true}>
        <Grid container={true} direction="row" alignItems="center" paddingY="0.25rem">
          <Grid item={true} sm={4}>
            <Typography variant="h6" noWrap={true} sx={{ ml: '1.25rem' }}>
              {templateName}
            </Typography>
          </Grid>

          <Grid container={true} item={true} sm={4} justifyContent="center">
            {children}
          </Grid>

          <Grid container={true} item={true} sm={4} justifyContent="flex-end">
            <IconButton onClick={onClose} sx={{ mr: '1rem' }}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TemplatePreviewDialogAppBar;
