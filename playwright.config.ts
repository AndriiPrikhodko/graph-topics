import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    testDir: './playwright',
    timeout: 60 * 1000,
    retries: 1,
    reporter: 'html',
    use: {
        // waiter on navigation
        navigationTimeout: 10000,

        // screenshot reporter
        screenshot: 'only-on-failure',

        // video after first retry
        video: 'on-first-retry',

        // headless mode in CI env
        headless: true,// process.env.CI === 'true' ? true : false,
        // Viewport used for all pages in the context.
        viewport: { width: 1280, height: 762 },

        // Record trace only when retrying a test for the first time.
        trace: 'on-first-retry',
    },
}

export default config
