import React from 'react';
import { AppBar, AppBarProps, Box, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface TemplatePreviewDialogAppBarProps extends AppBarProps {
  templateName: string;
  appBarActions: React.ReactNode;
  onClose: () => void;
}

export const TemplatePreviewDialogAppBar: React.FC<TemplatePreviewDialogAppBarProps> = (props) => {
  const { templateName, appBarActions, onClose, ...other } = props;

  return (
    <AppBar position="sticky" {...other}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" paddingX="1.5rem" paddingY="0.25rem">
        <Box>
          <Typography variant="h6">{templateName}</Typography>
        </Box>

        <Box>{appBarActions}</Box>

        <Box>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default TemplatePreviewDialogAppBar;
