import React from 'react';
import { Box, CardMedia, Fade } from '@mui/material';
import { CardMediaTypeMap } from '@mui/material/CardMedia/CardMedia';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface CardMediaWithOverlayProps {
  showOverlay: boolean;
}

export const CardMediaWithOverlay: OverridableComponent<CardMediaTypeMap<CardMediaWithOverlayProps, 'div'>> = (
  props
) => {
  const { children, showOverlay = true, ...other } = props;
  return (
    <Box sx={{ position: 'relative' }}>
      <CardMedia sx={{ objectPosition: 'top' }} {...other} />
      <Fade in={showOverlay}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          {children}
        </Box>
      </Fade>
    </Box>
  );
};

export default CardMediaWithOverlay;
