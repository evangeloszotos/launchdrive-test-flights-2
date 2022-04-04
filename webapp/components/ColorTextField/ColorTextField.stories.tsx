/* eslint-disable react/no-multi-comp */
import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ColorTextField } from './ColorTextField';

export default {
  title: 'Components/ColorTextField',
  component: ColorTextField,
  argTypes: {},
} as ComponentMeta<typeof ColorTextField>;

const Template: ComponentStory<typeof ColorTextField> = (args) => (
  <ColorTextField {...args} />
);
export const Default = Template.bind({});
Default.args = {
  label: 'Primary',
  value: '#0fa',
  onChange: action('onChange'),
};

export const Type = () => {
  const [value, setValue] = useState('#ff0000');
  const [valid, setValid] = useState(true);

  return (
    <>
      <ColorTextField
        label="Primary"
        value={value}
        onChange={(e, codeValid) => {
          action('CodeValid')(codeValid);

          console.log('value', e?.target?.value);

          setValid(codeValid);
          setValue(e?.target?.value);
        }}
      />

      <span>valid: {JSON.stringify(valid)}</span>
    </>
  );
};

export const DefaultProps = () => {
  const [value, setValue] = useState('#ff0000');
  const [valid, setValid] = useState(true);

  return (
    <>
      <ColorTextField
        label="Primary"
        value={value}
        onChange={(e, codeValid) => {
          action('CodeValid')(codeValid);

          console.log('value', e?.target?.value);

          setValid(codeValid);
          setValue(e?.target?.value);
        }}
      />

      <span>valid: {JSON.stringify(valid)}</span>
    </>
  );
};
