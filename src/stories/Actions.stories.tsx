import type { Meta, StoryObj } from '@storybook/react';
import { waitFor, within, userEvent, expect, fn } from '@storybook/test';
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
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should not show clear on empty graph action', async () => {
      expect(await canvas.queryByTestId('clear-addGraphEdge')).toBeNull()
      expect(await canvas.queryByTestId('clear-removeGraphEdge')).toBeNull()
      expect(await canvas.queryByTestId('clear-deleteGraphEdge')).toBeNull()
    })
    
    await step('fill in graph actions', async () => {
      await userEvent.type(canvas.getByTestId('action-addGraphEdge'), 'add, edge');
      await userEvent.type(canvas.getByTestId('action-removeGraphEdge'), 'remove, edge');
      await userEvent.type(canvas.getByTestId('action-deleteGraphNode'), 'delete node');

      expect(await canvas.getByTestId('clear-addGraphEdge')).toBeInTheDocument()
      expect(await canvas.getByTestId('clear-addGraphEdge')).toBeInTheDocument()
      expect(await canvas.getByTestId('clear-addGraphEdge')).toBeInTheDocument()
    });

    await step('fill in graph actions', async () => {
      await userEvent.click(canvas.getByTestId('clear-addGraphEdge'))
      await userEvent.click(canvas.getByTestId('clear-removeGraphEdge'))
      await userEvent.click(canvas.getByTestId('clear-deleteGraphNode'))

      expect(await canvas.queryByTestId('clear-addGraphEdge')).toBeNull()
      expect(await canvas.queryByTestId('clear-removeGraphEdge')).toBeNull()
      expect(await canvas.queryByTestId('clear-deleteGraphEdge')).toBeNull()

      const inputAddGraphEdge = await canvas.getByTestId('action-addGraphEdge')
      const inputRemoveGraphEdge = await canvas.getByTestId('action-removeGraphEdge')
      const inputdeleteGraphNode = await canvas.getByTestId('action-deleteGraphNode')

      expect(inputAddGraphEdge.nodeValue).toBeNull()
      expect(inputRemoveGraphEdge.nodeValue).toBeNull()
      expect(inputdeleteGraphNode.nodeValue).toBeNull()
    })
  },
};