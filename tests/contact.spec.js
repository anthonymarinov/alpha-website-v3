
const { test, expect } = require('@playwright/test');

test('Contact form submits successfully', async ({ page }) => {
    // Inject the global flag to disable captcha.
    await page.addInitScript(() => {
        window.__SKIP_CAPTCHA__ = true;
    });

    // Intercept the POST request and simulate a successful response.
    await page.route('https://api.web3forms.com/submit', async (route) => {
        await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
        });
    });

    // Navigate to the homepage.
    await page.goto('/');

    // Scroll to the contact section.
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();
    await expect(contactSection).toBeVisible();

    // Fill out the form.
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message.');

    // Submit the form.
    await page.click('button[type="submit"]');

    // Verify that a success message appears (using a flexible locator).
    const successMessage = page.locator('text=/Thank you for your submission/i');
    await expect(successMessage).toBeVisible();
});

test('Contact form errors on no captcha', async ({ page }) => {
    // Intercept the POST request and simulate a successful response.
    await page.route('https://api.web3forms.com/submit', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ success: true }),
        });
    });
  
    // Navigate to the homepage.
    await page.goto('/');
  
    // Scroll to the contact section.
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();
    await expect(contactSection).toBeVisible();
  
    // Fill out the form.
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message.');
  
    // Submit the form.
    await page.click('button[type="submit"]');
  
    // Verify that a success message appears (using a flexible locator).
    const successMessage = page.locator('text=/Please complete the captcha./i');
    await expect(successMessage).toBeVisible();
  });
