import type { Meta, StoryObj } from '@storybook/react';
// import { withControls } from '@storybook/addon-controls';
import { Provider } from 'react-redux';
import store from '../store';

import ActionMenu from '../components/left-side/sub-components/menu/ActionMenu';

const meta = {
  title: 'action menu',
  component: ActionMenu,
  decorators: [(Story) => 
  <Provider store={store}>
    <Story/>
  </Provider>],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const actionList: Story = {
};
