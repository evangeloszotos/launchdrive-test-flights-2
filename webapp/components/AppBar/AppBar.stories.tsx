import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import PropTypes from 'prop-types';
import { AppBar } from './AppBar';

/** const AppBar = (props) => {
  const { title, backHref } = props;

  return (
    <div>
      {title} {backHref}
    </div>
  );
};
AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  backHref: PropTypes.string.isRequired,
}; */

export default {
  title: 'Components/AppBar',
  component: AppBar,
  argTypes: {},
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'LaunchDrive',
  backHref: '/foo',
};

export const Secondary = Template.bind({});
Secondary.args = {
  onClick: action('onClick'),
};
