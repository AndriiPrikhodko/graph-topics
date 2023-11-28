import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from 'msw-storybook-addon';
import { setupWorker } from "msw";
import { handlers } from "../src/mocks/handlers";
import { withRouter } from 'storybook-addon-react-router-v6';

const worker = setupWorker(...handlers);
worker.start();

// Initialize MSW
initialize();

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
  loaders: [mswLoader],
  decorators: [withRouter]
};

export default preview;
