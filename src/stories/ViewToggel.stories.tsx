import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { waitFor, within, userEvent, expect, fn } from '@storybook/test';
import store from '../store';
import {default as testData} from './test-data/toggle.data.json'
import selectors from './components/viewToggle.selectors'

import ToggleStatistics from '../components/left-side/sub-components/menu/ToggleStatistics';
import { getElementCollectionById } from './utils/element-collections';

const meta = {
  title: 'view toggle',
  component: ToggleStatistics,
  decorators: [(Story) => <Provider store={store}><Story/></Provider>],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ToggleStatistics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const viewToggle: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(`should be ${testData.labelOff} by default`, async () => {
      const toggleLabel = await canvas.getByTestId(selectors.labeTestId)

      expect(toggleLabel.textContent).toContain(testData.labelOff)
    })

    await step(`should change label to ${testData.labelOn} on toggle click`, async () => {
      const [
        toggleLabel,
        toggleCheckbox
      ] = await getElementCollectionById.call(canvas, [
        selectors.labeTestId,
        selectors.checkboxTestId
      ])

      await userEvent.click(toggleCheckbox)
      
      expect(toggleLabel.textContent).toContain(testData.labelOn)
    })
  }
};