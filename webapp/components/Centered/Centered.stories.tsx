import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Paper } from '@mui/material';
import { Centered, CenteredHorizontallyOnly } from './Centered';

export default {
  title: 'Components/Centered',
  component: Centered,
  argTypes: {},
} as ComponentMeta<typeof Centered>;

const Template: ComponentStory<typeof Centered> = () => (
  <Box sx={{ border: '1px solid red', width: 200, height: 200 }}>
    <CenteredHorizontallyOnly>
      <Paper sx={{ width: 32, height: 32 }} />
    </CenteredHorizontallyOnly>
  </Box>
);
export const Unstyled = Template.bind({});
Unstyled.args = {};

const Template2: ComponentStory<typeof Centered> = () => (
  <Box sx={{ border: '1px solid red', width: 200, height: 200 }}>
    <Centered>
      <Paper sx={{ width: 32, height: 32 }} />
    </Centered>
  </Box>
);
export const Default = Template2.bind({});
Default.args = {};
