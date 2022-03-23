import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import React from 'react';
import { CardMediaWithOverlay } from './CardMediaWithOverlay';
import PlaceholderPreviewImage from '../TemplateCard/PlaceholderPreviewImage.png';
import Centered from '../Centered';

export default {
  title: 'Components/CardMediaWithOverlay',
  component: CardMediaWithOverlay,
  argTypes: {},
} as ComponentMeta<typeof CardMediaWithOverlay>;

const Template: ComponentStory<typeof CardMediaWithOverlay> = (args) => (
  <CardMediaWithOverlay {...args}>
    <Box sx={{ backgroundColor: '#00000080', width: '100%', height: '100%' }}>
      <Centered>
        <Stack direction="row" spacing={1}>
          Foo Bar!
        </Stack>
      </Centered>
    </Box>
  </CardMediaWithOverlay>
);

export const Default = Template.bind({});
Default.args = {
  component: 'img',
  height: '176',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  src: PlaceholderPreviewImage,
  alt: 'green iguana',
  showOverlay: true,
};
