import { expect } from '@storybook/test';

export const expectIdSelectorsPresence = async function(
    this: {queryByTestId(id: string): HTMLElement}, 
    selectors: string[],
    presence: boolean
    ): Promise<void> {
    await Promise.all(selectors.map(
      selector => expect(this.queryByTestId(selector))
        [presence? 'toBeInTheDocument': 'toBeNull']()
    ))
  }