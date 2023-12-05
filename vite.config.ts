import react from '@vitejs/plugin-react'

const config = {
  plugins: [
    react(),
  ],
  setup: 'src/test/setup.ts',
  testTimeout: 60000,
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage/unit',
      exclude: [
        '**/.storybook/**',
        '**/build/**',
        '**/src/test/**',
        '**/node_modules/**', 
        '**/src/stories/**',
        '**/src/mocks/**',
        '**/src/helpers/hooks/**',
        '**/src/assets/**',
        '**/dist/**', 
        '**/public/**',
        '**/.{idea,git,cache,output,temp}/**'
      ]
    },
    include: [
      '**/src/test/unit/**/*.test.(ts|tsx)',
    ],
  }
}

export default config