import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Paper } from '@mui/material';
import { Centered } from './Centered';

export default {
  title: 'Components/Centered',
  component: Centered,
  argTypes: {},
} as ComponentMeta<typeof Centered>;

const TemplateComponent = () => (
  <Box sx={{ border: '1px solid red', width: 200, height: 200 }}>
    <Centered>
      <Paper sx={{ width: 32, height: 32 }} />
    </Centered>
  </Box>
);

const Template: ComponentStory<typeof Centered> = TemplateComponent;

export const Default = Template.bind({});
Default.args = {};
