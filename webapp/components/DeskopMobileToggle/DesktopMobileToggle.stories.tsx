import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DesktopMobileToggle } from './DesktopMobileToggle';

export default {
  title: 'Components/DesktopMobileToggle',
  component: DesktopMobileToggle,
  argTypes: {
    value: {
      options: ['desktop', 'mobile'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof DesktopMobileToggle>;

const Template: ComponentStory<typeof DesktopMobileToggle> = (args) => (
  <DesktopMobileToggle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 'desktop',
  onChange: action('onChange'),
};
