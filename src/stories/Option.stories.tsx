import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../store';

import ActionOption from '../components/left-side/sub-components/menu/ActionOption';

type CustomArgs = React.ComponentProps<typeof ActionOption> & { 
  advanced?: boolean
  margin?: number
  backgroundColor?: string
  style?: React.CSSProperties;
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
    backgroundColor: { control: 'color' },
  }
} satisfies Meta<CustomArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const actionOption: Story = {
  render: (args) => {

    return <ActionOption {...args} style={{backgroundColor: args['backgroundColor']}} />;
  },
  parameters: {
        controls: { exclude: ['label', 'placeholder', 'style'] },
      },
  args: {
        label: 'title',
        placeholder: 'placeholder',
        actionFunction: 'addGraphEdge',
        advanced: false
      }
};