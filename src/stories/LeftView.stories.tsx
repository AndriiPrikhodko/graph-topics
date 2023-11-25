import type { Meta, StoryObj } from '@storybook/react';
import { waitFor, within, userEvent, expect, fn } from '@storybook/test';
import { Provider } from 'react-redux';
import store from '../store';
import LeftView from '../components/left-side/LeftView';
import {default as testData} from './test-data/dropdown.data.json'
import selectors from './components/dorpdown.selectors'

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
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    step('should open drop down on click', async () => {
      const dropdownTrigger = canvas.getByTestId(selectors.testIdDropdownTrigger)
      await userEvent.click(dropdownTrigger)
      const dropdownEls = await document
        .getElementsByClassName(selectors.classDropdownItems)

      expect(dropdownEls.length).toEqual(testData.numberOfItems)
    })

    step('dropdown elements should have correct graph names', async () => {
      const firstFileItem = await
        canvas.findByTestId(selectors.testIdDropdownItem1)
        const secondFileInput = await
        canvas.findByTestId(selectors.testIdDropdownItem2)

      expect(firstFileItem.innerHTML).toContain(testData.valueFirstInput)
      expect(secondFileInput.innerHTML).toContain(testData.valueSecondInput)
    })

    step('should close dropdown on picking graph and set graph name', async () => {
      const firstFileItem = await
        canvas.findByTestId(selectors.testIdDropdownItem1)
      const firstFileInput = firstFileItem.querySelector('input') as HTMLElement
      await userEvent.click(firstFileInput)

      await waitFor(async () => {
        await expect(firstFileInput).not.toBeVisible()
      })

      const dropdownTrigger = await canvas.findByDisplayValue(testData.fileName1)

      await waitFor(async () => {
        await expect(dropdownTrigger).toBeVisible()
      })
    })
  }
};
