import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SideBar from './SideBar';

export default {
  title: 'Components/SideBar',
  component: SideBar,
  argTypes: {},
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Default = Template.bind({});
  Default.args = {
  onClick: action('onClick'),
};

export const Secondary = Template.bind({});
  Secondary.args = {
  onClick: action('onClick'),
};
