import React, { ReactElement, useState } from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import CardMediaWithOverlay from '../CardMediaWithOverlay';
import Centered from '../Centered';
import addKeysToReactElements from '../../utils/addKeysToReactElements';

interface TemplateCardProps {
  actions: Array<ReactElement>;
  templatePreviewImageSrc: string;
  title: string;
  description?: string;
  tags?: Array<ReactElement>;
}

export const TemplateCard: React.FC<TemplateCardProps> = (props) => {
  const { actions, tags, templatePreviewImageSrc, title, description } = props;
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 450,
        borderRadius: '10px',
      }}
      variant="outlined"
      onMouseOver={() => !showOverlay && setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <CardMediaWithOverlay
        component="img"
        // component={Image} <= Geht nicht
        height="176"
        src={templatePreviewImageSrc}
        alt="green iguana"
        showOverlay={showOverlay}
      >
        <Box
          sx={{ backgroundColor: '#00000080', width: '100%', height: '100%' }}
        >
          <Centered>
            <Stack direction="row" spacing={1}>
              {addKeysToReactElements(actions, 'cardActions')}
            </Stack>
          </Centered>
        </Box>
      </CardMediaWithOverlay>
      <CardContent>
        {showOverlay ? 'ON' : 'OFF'}
        <Typography sx={{ fontSize: 24, mb: 0.5 }}> {title} </Typography>
        <Typography sx={{ fontSize: 14, lineHeight: '20px', mb: 0.75 }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={0.75}>
          {addKeysToReactElements(tags, 'cardTags')}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
