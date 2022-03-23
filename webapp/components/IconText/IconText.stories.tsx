import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Widgets } from '@mui/icons-material';
import { IconText } from './IconText';

export default {
  title: 'Components/IconText',
  component: IconText,
  argTypes: {
    fontWeight: {
      options: ['bolder', 'bold', 'medium', 'normal', 'light', 'lighter'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof IconText>;

// eslint-disable-next-line react/prop-types
const Template: ComponentStory<typeof IconText> = (props) => (
  <IconText icon={<Widgets />} label="LaunchDrive" {...props} />
);

export const Default = Template.bind({});
Default.args = {
  onClick: action('onClick'),
  color: 'primary.main',
  fontSize: 16,
  letterSpacing: 0.5,
};

export const Secondary = Template.bind({});
Secondary.args = {
  onClick: action('onClick'),
};
