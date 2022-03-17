import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Widgets } from '@mui/icons-material';
import { TextWithIcon } from './TextWithIcon';

export default {
  title: 'Components/TextWithIcon',
  component: TextWithIcon,
  argTypes: {
    fontWeight: {
      options: ['bolder', 'bold', 'medium', 'normal', 'light', 'lighter'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TextWithIcon>;

// eslint-disable-next-line react/prop-types
const Template: ComponentStory<typeof TextWithIcon> = (props) => (
  <TextWithIcon icon={<Widgets />} label="LaunchDrive" {...props} />
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
