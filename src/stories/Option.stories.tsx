import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../store';

import ActionOption from '../components/left-side/sub-components/menu/ActionOption';

type CustomArgs = React.ComponentProps<typeof ActionOption> & { 
  advanced?: boolean
  margin?: number
};

const meta = {
  title: 'action option',
  component: ActionOption,
  decorators: [(Story) => <Provider store={store}><Story/></Provider>],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    label: { control: 'text' },
    actionFunction: {
      options: ['addGraphEdge', 'removeGraphEdge', 'deleteGraphNode'],
      control: { type: 'select' },
    },
    advanced: { 
      control: 'boolean',
      defaultValue: false
    },
    margin: { control: 'number', if: { arg: 'advanced' } },
  }
} satisfies Meta<CustomArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const actionOption: Story = {
  parameters: {
    controls: { exclude: ['label', 'placeholder'] },
  },
  args: {
    label: 'title',
    placeholder: 'placeholder',
    actionFunction: 'addGraphEdge',
    advanced: false
  }
};