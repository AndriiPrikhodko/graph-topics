import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../store';
import LeftView from '../components/left-side/LeftView';

const meta = {
  title: 'left view',
  component: LeftView,
  decorators: [(Story) => <Provider store={store}><Story/></Provider>],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LeftView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const leftView: Story = {
};
