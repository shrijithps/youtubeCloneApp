import React from 'react';
import MenuButton from '../components/MenuButton';

export default {
  title: 'Components/MenuButton',
  component: MenuButton,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onToggleSidebar: () => alert('Sidebar toggled!'),
};