import { defineConfig, devices } from "@playwright/test";

/** @type {import('playwright/test').PlaywrightTestConfig} */
export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    reporter: 'html',
    timeout: 30 * 1000,
    use: {
        baseURL: 'http://localhost:3000',
        ignoreHTTPSErrors: true,
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
    
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },
    
        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },
    
        /* Test against mobile viewports. */
        {
            name: "Mobile Chrome",
            use: { ...devices["Pixel 5"] },
        },
        {
            name: "Mobile Safari",
            use: { ...devices["iPhone 12"] },
        },
    
        /* Test against branded browsers. */
        {
           name: 'Microsoft Edge',
           use: { ...devices['Desktop Edge'], channel: 'msedge' },
        },
        {
            name: "Google Chrome",
            use: { ...devices["Desktop Chrome"], channel: "chrome" },
        },
      ],
});