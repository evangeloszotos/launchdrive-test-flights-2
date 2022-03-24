import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { BoxProps } from '@mui/material/Box/Box';
import ImagePreviewBase from '../ImagePreviewBase';
import Centered from '../Centered';

interface ImagePreviewSmallProps {
  label?: string;
  onClick?: React.MouseEventHandler;
  icon?: React.ReactElement;
  disableOverlay?: boolean;
}

const WhiteButton = styled(Button)`
  color: white;
  border-color: white !important;
  padding: 5px 10px;
`;

export const ImagePreviewSmall: React.VoidFunctionComponent<BoxProps<'div', ImagePreviewSmallProps>> = (props) => {
  const { label, icon = <Edit />, disableOverlay = false, onClick, children } = props;

  return (
    <Box>
      {label ? (
        <Typography fontSize={12} color="#0000009a" mb={0.5}>
          {label}
        </Typography>
      ) : null}
      <ImagePreviewBase
        height={138}
        disableOverlay={disableOverlay}
        overlayContent={
          <Centered>
            <WhiteButton
              variant="outlined"
              onClick={(e) => {
                onClick?.(e);
              }}
            >
              {icon}
            </WhiteButton>
          </Centered>
        }
      >
        {children}
      </ImagePreviewBase>
    </Box>
  );
};

export default ImagePreviewSmall;
