import type { Meta, StoryObj } from '@storybook/react';
import { waitFor, within, userEvent, expect, fn } from '@storybook/test';
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
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    step('should open drop down on click', async () => {
      const dropdownTrigger = canvas.getByTestId('load-dropdown')
      await userEvent.click(dropdownTrigger)
      const dropdownEls = await document.getElementsByClassName('dropdown-item')

      expect(dropdownEls.length).toEqual(2)
    })

    step('dropdown elements should have correct graph names', async () => {
      const firstFileInput = await
        canvas.findByTestId('dropdown-item-0')
        const secondFileInput = await
        canvas.findByTestId('dropdown-item-1')

      expect(firstFileInput.innerHTML).toContain('mockfileName1')
      expect(secondFileInput.innerHTML).toContain('mockfileName2')
    })

    step('should close dropdown on picking graph and set graph name', async () => {
      const firstFileItem = await
        canvas.findByTestId('dropdown-item-0')
      const firstFileInput = firstFileItem.querySelector('input') as HTMLElement
      await userEvent.click(firstFileInput)

      await waitFor(async () => {
        await expect(firstFileInput).not.toBeVisible()
      })

      const dropdownTrigger = await canvas.findByDisplayValue('mockfileName1')

      await waitFor(async () => {
        await expect(dropdownTrigger).toBeVisible()
      })
    })
  }
};
