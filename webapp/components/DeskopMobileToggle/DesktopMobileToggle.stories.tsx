import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DesktopMobileToggle } from './DesktopMobileToggle';

export default {
  title: 'Components/DesktopMobileToggle',
  component: DesktopMobileToggle,
  argTypes: {
    state: {
      options: ['desktop', 'mobile'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof DesktopMobileToggle>;

const Template: ComponentStory<typeof DesktopMobileToggle> = (args) => <DesktopMobileToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'desktop',
  triggerOnChangeOnNullValue: false,
  onChange: action('onChange'),
};

export const InternalState = Template.bind({});
InternalState.args = {
  triggerOnChangeOnNullValue: false,
  handleStateInternally: true,
  onChange: action('onChange'),
};
