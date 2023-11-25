import type { Meta, StoryObj } from '@storybook/react';
import { waitFor, within, userEvent, expect, fn } from '@storybook/test';
import { Provider } from 'react-redux';
import store from '../store';
import selectors from './components/actions.selectors'
import {default as testData} from './test-data/actions.data.json'

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
      expect(await canvas.queryByTestId(selectors.testIdClearAddEdge)).toBeNull()
      expect(await canvas.queryByTestId(selectors.testIdClearRemoveEdge)).toBeNull()
      expect(await canvas.queryByTestId(selectors.testIdClearDeleteNode)).toBeNull()
    })
    
    await step('should show clear when fill in graph actions inputs', async () => {
      const addEdgeInput = await canvas.getByTestId(selectors.testIdInputAddEdge)
      const removeEdgeInput = await canvas.getByTestId(selectors.testIdInputRemoveEdge)
      const deleteNodeInput = await canvas.getByTestId(selectors.testIdInputDeleteNode)

      await userEvent.type(addEdgeInput, testData.addEdge);
      await userEvent.type(removeEdgeInput, testData.removeEdge);
      await userEvent.type(deleteNodeInput, testData.deleteNode);

      expect(await canvas.getByTestId(selectors.testIdClearAddEdge)).toBeInTheDocument()
      expect(await canvas.getByTestId(selectors.testIdClearRemoveEdge)).toBeInTheDocument()
      expect(await canvas.getByTestId(selectors.testIdInputDeleteNode)).toBeInTheDocument()
    });

    await step('should clear in graph actions input when click on clear', async () => {
      const clearAddEdgeIcon = await canvas.getByTestId(selectors.testIdClearAddEdge)
      const clearRemoveEdgeIcon = await canvas.getByTestId(selectors.testIdClearRemoveEdge)
      const clearDeleteNodeIcon = await canvas.getByTestId(selectors.testIdClearDeleteNode)

      await userEvent.click(clearAddEdgeIcon)
      await userEvent.click(clearRemoveEdgeIcon)
      await userEvent.click(clearDeleteNodeIcon)

      expect(await canvas.queryByTestId(selectors.testIdClearAddEdge)).toBeNull()
      expect(await canvas.queryByTestId(selectors.testIdClearRemoveEdge)).toBeNull()
      expect(await canvas.queryByTestId(selectors.testIdClearDeleteNode)).toBeNull()

      const addEdgeInput = await canvas.getByTestId(selectors.testIdInputAddEdge)
      const removeEdgeInput = await canvas.getByTestId(selectors.testIdInputRemoveEdge)
      const deleteNodeInput = await canvas.getByTestId(selectors.testIdInputDeleteNode)

      expect(addEdgeInput.nodeValue).toBeNull()
      expect(removeEdgeInput.nodeValue).toBeNull()
      expect(deleteNodeInput.nodeValue).toBeNull()
    })
  },
};