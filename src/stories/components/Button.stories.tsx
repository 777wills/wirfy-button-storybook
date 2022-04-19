import Button from '../../components/index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import '../../wirvi-styles.scss';
import { Icon } from '../../components/icon';

export default {
  title: 'Wirfy/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'Hello Word!',
}

export const TextChildren: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Label Children</Button>
);
TextChildren.args = {
  color: 'is-danger'
}

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <Icon />,
  text: 'Hello Word!'
}

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: <Icon />,
  color: 'is-success'
}

export const FullScreen = Template.bind({});
FullScreen.args = {
  isFullwidth: true,
}

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
}

export const WithChildren: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <span style={{ marginRight: '10px' }}>Label Children</span>
    <Icon />
  </Button>
);
WithChildren.args = {
  isRounded: true
}

export const WithLoading = Template.bind({});
WithLoading.args = {
  isLoading: true,
  text: 'Hello Word!!'
}