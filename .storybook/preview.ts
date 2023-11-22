import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
      expanded: true
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#111' },
        { name: 'black', value: '#eee' }
      ],
    },  
  },
};

export default preview;
