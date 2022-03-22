import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { BoxProps } from '@mui/material/Box/Box';
import ImagePreviewBase from '../ImagePreviewBase';
import Centered from '../Centered';

interface ImagePreviewSmallProps {
  label?: string;
  value?: any;
  onClick?: React.MouseEventHandler;
  onClickEditLogo?: React.MouseEventHandler;
  onClickNewLogo?: React.MouseEventHandler;
}

const WhiteButton = styled(Button)`
  color: white;
  border-color: white !important;
  padding: 5px 10px;
`;

export const ImagePreviewSmall: React.VoidFunctionComponent<BoxProps<'div', ImagePreviewSmallProps>> = (props) => {
  const { label, value, onClick, onClickNewLogo, onClickEditLogo } = props;

  return (
    <Box>
      {label ? (
        <Typography fontSize={12} color="#0000009a" mb={0.5}>
          {label}
        </Typography>
      ) : null}
      <ImagePreviewBase
        value={value}
        overlayEnabled={!!value}
        sx={{ height: '138px' }}
        overlayContent={
          <Centered>
            <WhiteButton
              variant="outlined"
              onClick={(e) => {
                if (onClick) onClick(e);
                if (onClickEditLogo) onClickEditLogo(e);
              }}
            >
              <Edit />
            </WhiteButton>
          </Centered>
        }
        emptyContent={
          <Box
            sx={{ height: '100%', cursor: 'pointer' }}
            onClick={(e) => {
              if (onClick) onClick(e);
              if (onClickNewLogo) onClickNewLogo(e);
            }}
          >
            <Centered>Click here to select a logo</Centered>
          </Box>
        }
      />
    </Box>
  );
};

export default ImagePreviewSmall;
