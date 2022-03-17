import { AppBar, Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

import SlideUpTransition from './SlideUpTransition';

export const TemplatePreviewDialog = (props) => {
  const { open, templateName, templateWith, onClose, desktopImageUrl, mobileImageUrl } = props;

  // let toggleButton manage
  const [show, setShow] = useState(true);

  return (
    <Dialog fullScreen={true} open={open} onClose={onClose} scroll="body" TransitionComponent={SlideUpTransition}>
      <AppBar position="sticky">
        <Stack direction="row" justifyContent="space-between" alignItems="center" paddingX="1.5rem">
          <Box>
            <Typography variant="h6">{templateName}</Typography>
          </Box>

          <Box>
            {/* DesktopMobileToggle handleChange */}
            <Button
              variant="text"
              onClick={() => {
                setShow(!show);
                onClose();
              }}
            >
              <Typography variant="h6">ToggleDesktop</Typography>
            </Button>
          </Box>

          <Box>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      </AppBar>

      <Stack direction="row" justifyContent="center" marginTop="2.5vh">
        <div style={{ width: templateWith, height: 'full', position: 'relative' }}>
          <Image
            src={show ? desktopImageUrl : mobileImageUrl}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </Stack>
    </Dialog>
  );
};

TemplatePreviewDialog.propTypes = {
  templateName: PropTypes.string,
  open: PropTypes.bool,
  templateWith: PropTypes.string,
  onClose: PropTypes.func,
  desktopImageUrl: PropTypes.string,
  mobileImageUrl: PropTypes.string,
};
TemplatePreviewDialog.defaultProps = {
  templateName: 'Test',
  open: false,
  templateWith: '100%',
  desktopImageUrl: '',
  mobileImageUrl: '',
  onClose: () => {
    console.log('handleClose');
  },
};

export default TemplatePreviewDialog;
