import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorTextField, ColorTextFieldUnstyled } from './ColorTextField';

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
};

const TemplateUnstyled: ComponentStory<typeof ColorTextFieldUnstyled> = (args) => <ColorTextFieldUnstyled {...args} />;
export const Unstyled = TemplateUnstyled.bind({});
Unstyled.args = {
  label: 'Primary',
  value: '#0fa',
};
