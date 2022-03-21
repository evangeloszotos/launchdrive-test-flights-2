import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ColorTextField } from './ColorTextField';

export default {
  title: 'Components/ColorTextField',
  component: ColorTextField,
  argTypes: {},
} as ComponentMeta<typeof ColorTextField>;

const Template: ComponentStory<typeof ColorTextField> = (args) => <ColorTextField {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: 'Primary',
  value: '#0fa',
  onChange: action('onChange'),
};
