import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Paper } from '@mui/material';
import { HoverOverlay } from './HoverOverlay';
import Centered from '../Centered';

export default {
  title: 'Components/HoverOverlay',
  component: HoverOverlay,
  argTypes: {},
} as ComponentMeta<typeof HoverOverlay>;

const Template: ComponentStory<typeof HoverOverlay> = (args) => (
  <HoverOverlay {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  // onClick: action('onClick'),
};

export const Default: ComponentStory<typeof HoverOverlay> = () => (
  <HoverOverlay
    overlayContent={<Centered>HELLO</Centered>}
    activatorContent={
      <Box sx={{ border: '1px solid red', width: 200, height: 200 }}>
        <Centered>
          <Paper sx={{ width: 32, height: 32 }} />
        </Centered>
      </Box>
    }
  />
);

export const UsingChildren: ComponentStory<typeof HoverOverlay> = () => (
  <HoverOverlay overlayContent={<Centered>HELLO</Centered>}>
    <Box sx={{ border: '1px solid red', width: 200, height: 200 }}>
      <Centered>
        <Paper sx={{ width: 32, height: 32 }} />
      </Centered>
    </Box>
  </HoverOverlay>
);

export const Disabled: ComponentStory<typeof HoverOverlay> = () => (
  <HoverOverlay
    overlayContent={<Centered>HELLO</Centered>}
    activatorContent={
      <Box sx={{ border: '1px solid red', width: 200, height: 200 }}>
        <Centered>
          <Paper sx={{ width: 32, height: 32 }} />
        </Centered>
      </Box>
    }
    disabled
  />
);
