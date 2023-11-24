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
    
    await step('should show clear when fill in graph actions inputs', async () => {
      const addEdgeInput = await canvas.getByTestId('action-addGraphEdge')
      const removeEdgeInput = await canvas.getByTestId('action-removeGraphEdge')
      const deleteNodeInput = await canvas.getByTestId('action-deleteGraphNode')

      await userEvent.type(addEdgeInput, 'add, edge');
      await userEvent.type(removeEdgeInput, 'remove, edge');
      await userEvent.type(deleteNodeInput, 'delete node');

      expect(await canvas.getByTestId('clear-addGraphEdge')).toBeInTheDocument()
      expect(await canvas.getByTestId('clear-addGraphEdge')).toBeInTheDocument()
      expect(await canvas.getByTestId('clear-addGraphEdge')).toBeInTheDocument()
    });

    await step('should clear in graph actions input when click on clear', async () => {
      const clearAddEdgeIcon = await canvas.getByTestId('clear-addGraphEdge')
      const clearRemoveEdgeIcon = await canvas.getByTestId('clear-removeGraphEdge')
      const clearDeleteNodeIcon = await canvas.getByTestId('clear-deleteGraphNode')

      await userEvent.click(clearAddEdgeIcon)
      await userEvent.click(clearRemoveEdgeIcon)
      await userEvent.click(clearDeleteNodeIcon)

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