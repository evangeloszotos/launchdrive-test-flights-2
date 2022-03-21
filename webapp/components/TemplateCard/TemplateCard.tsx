import React, { useState } from 'react';
import { Box, Button, ButtonProps, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { teal } from '@mui/material/colors';
import PlaceholderPreviewImage from './PlaceholderPreviewImage.png';
import CardMediaWithOverlay from '../CardMediaWithOverlay';
import Centered from '../Centered';
import Image from 'next/image';

interface TemplateCardProps {
  templatePreviewImage: string;
  headerText: string;
  bodyText: string;
  chips: Array<string>;
  'onClick:select': () => void;
  'onClick:preview': () => void;
}

const ColorButton = styled(Button)<
  ButtonProps & {
    mainColor?: string;
    mainColorHover?: string;
    textColor: string;
    borderColor?: string;
    borderColorHover?: string;
  }
>(({ mainColor, mainColorHover, textColor, borderColor, borderColorHover }) => ({
  color: textColor,
  borderColor,
  backgroundColor: mainColor,
  '&:hover': {
    backgroundColor: mainColorHover,
    borderColor: borderColor || borderColorHover,
  },
}));

export const TemplateCard: React.FC<TemplateCardProps> = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 450,
        borderRadius: '10px',
      }}
      variant="outlined"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <CardMediaWithOverlay
        // component="img"
        component={Image}
        height="176"
        src={PlaceholderPreviewImage}
        alt="green iguana"
        showOverlay={showOverlay}
      >
        <Box sx={{ backgroundColor: '#00000080', width: '100%', height: '100%' }}>
          <Centered>
            <Stack direction="row" spacing={1}>
              <ColorButton
                variant="contained"
                color="primary"
                mainColor={teal[500]}
                mainColorHover={teal[700]}
                textColor="#fff"
              >
                Select
              </ColorButton>
              <ColorButton variant="outlined" color="primary" textColor="#fff" borderColor="#fff">
                Preview
              </ColorButton>
            </Stack>
          </Centered>
        </Box>
      </CardMediaWithOverlay>
      <CardContent>
        <Typography sx={{ fontSize: 24, mb: 0.5 }}> Card header </Typography>
        <Typography sx={{ fontSize: 14, lineHeight: '20px', mb: 0.75 }}> Body </Typography>
        <Stack direction="row" spacing={0.75}>
          <Chip label="Chip" variant="outlined" size="small" sx={{ px: 0.25 }} />
          <Chip label="Chip" variant="outlined" size="small" sx={{ px: 0.25 }} />
          <Chip label="Chip" variant="outlined" size="small" sx={{ px: 0.25 }} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
