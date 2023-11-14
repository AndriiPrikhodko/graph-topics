import { type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

interface IViteConfig extends UserConfig {
    test: {
        globals: boolean,
        environment: 'jsdom' | 'happy-dom'
    }
}

export default {
    plugins: [react()],
    testTimeout: 60000,
    test: {
      globals: true,
      environment: 'happy-dom'
    },
  } as IViteConfig