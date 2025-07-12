// src/stories/SearchBar.stories.jsx
import React from 'react';
import SearchBar from '../components/SearchBar'; // Use default import

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: (query) => alert(`Search query: ${query}`),
};

