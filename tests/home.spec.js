
const { test, expect } = require('@playwright/test');

test('Homepage loads and displays key content', async ({ page }) => {

    await page.goto('/'); 
    await expect(page).toHaveTitle(/Alpha MM Inc/i);

    // const heroHeading = page.locator('section.relative.h-screen h1');
    // await expect(heroHeading).toHaveText(/FULL SERVICE CONSTRUCTION/i);

    // const introText = page.locator('section.relative.h-screen p');
    // await expect(introText).toContainText(/Building dreams from the ground up/i);

    // const learnMoreLink = page.locator('section.relative.h-screen a', { hasText: 'Learn More' });
    // await expect(learnMoreLink).toBeVisible();
    // await expect(learnMoreLink).toHaveAttribute('href', '/#about');

    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();

    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeVisible();

    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();

    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
});

test('Navbar company logo image loads successfully', async ({ page }) => {
    await page.goto('/');
    const testImage = page.locator('img[alt="Alpha Navbar Logo"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Footer company logo image loads successfully', async ({ page }) => {
    await page.goto('/#contact');
    const testImage = page.locator('img[alt="Alpha Footer Logo"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});


test('Home hero image loads successfully', async ({ page }) => {
    await page.goto('/');
    const testImage = page.locator('img[alt="Home Background Image"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Service summary section icons load successfully', async ({ page }) => {
    await page.goto('/#about');
    const testImage = page.locator('img[alt="New Construction"]');
    const testImage2 = page.locator('img[alt="Existing Construction"]');
    const testImage3 = page.locator('img[alt="Free Estimates"]');

    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);

    await testImage2.scrollIntoViewIfNeeded();
    await expect(testImage2).toBeVisible();
    const bbox2 = await testImage2.boundingBox();
    expect(bbox2.width).toBeGreaterThan(0);
    expect(bbox2.height).toBeGreaterThan(0);

    await testImage3.scrollIntoViewIfNeeded();
    await expect(testImage3).toBeVisible();
    const bbox3 = await testImage3.boundingBox();
    expect(bbox3.width).toBeGreaterThan(0);
    expect(bbox3.height).toBeGreaterThan(0);
});

test('Business Card loads successfully', async ({ page }) => {
    await page.goto('/#about');
    const testImage = page.locator('img[alt="Business Card"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('LA hero image loads successfully', async ({ page }) => {
    await page.goto('/#about');
    const testImage = page.locator('img[alt="LA Background Image"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Services section icons load successfully', async ({ page }) => {
    await page.goto('/#services');
    const testImage = page.locator('img[alt="Waterproofing"]');
    const testImage2 = page.locator('img[alt="Reseal"]');
    const testImage3 = page.locator('img[alt="Stairs"]');
    const testImage4 = page.locator('img[alt="Railings"]');

    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);

    await testImage2.scrollIntoViewIfNeeded();
    await expect(testImage2).toBeVisible();
    const bbox2 = await testImage2.boundingBox();
    expect(bbox2.width).toBeGreaterThan(0);
    expect(bbox2.height).toBeGreaterThan(0);

    await testImage3.scrollIntoViewIfNeeded();
    await expect(testImage3).toBeVisible();
    const bbox3 = await testImage3.boundingBox();
    expect(bbox3.width).toBeGreaterThan(0);
    expect(bbox3.height).toBeGreaterThan(0);

    await testImage4.scrollIntoViewIfNeeded();
    await expect(testImage4).toBeVisible();
    const bbox4 = await testImage4.boundingBox();
    expect(bbox4.width).toBeGreaterThan(0);
    expect(bbox4.height).toBeGreaterThan(0);
});

test('Project images load successfully', async ({ page }) => {
    await page.goto('/#projects');
    const testImage = page.locator('img[alt="Walkway 2"]');
    const testImage2 = page.locator('img[alt="Deck 3"]');
    const testImage3 = page.locator('img[alt="Stairway"]');
    const testImage4 = page.locator('img[alt="Deck"]');
    const testImage5 = page.locator('img[alt="Walkway"]');
    const testImage6 = page.locator('img[alt="Landing"]');
    const testImage7 = page.locator('img[alt="Deck 2"]');
    const testImage8 = page.locator('img[alt="Balcony"]');
    
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);

    await testImage2.scrollIntoViewIfNeeded();
    await expect(testImage2).toBeVisible();
    const bbox2 = await testImage2.boundingBox();
    expect(bbox2.width).toBeGreaterThan(0);
    expect(bbox2.height).toBeGreaterThan(0);

    await testImage3.scrollIntoViewIfNeeded();
    await expect(testImage3).toBeVisible();
    const bbox3 = await testImage3.boundingBox();
    expect(bbox3.width).toBeGreaterThan(0);
    expect(bbox3.height).toBeGreaterThan(0);

    await testImage4.scrollIntoViewIfNeeded();
    await expect(testImage4).toBeVisible();
    const bbox4 = await testImage4.boundingBox();
    expect(bbox4.width).toBeGreaterThan(0);
    expect(bbox4.height).toBeGreaterThan(0);

    await testImage5.scrollIntoViewIfNeeded();
    await expect(testImage5).toBeVisible();
    const bbox5 = await testImage5.boundingBox();
    expect(bbox5.width).toBeGreaterThan(0);
    expect(bbox5.height).toBeGreaterThan(0);

    await testImage6.scrollIntoViewIfNeeded();
    await expect(testImage6).toBeVisible();
    const bbox6 = await testImage6.boundingBox();
    expect(bbox6.width).toBeGreaterThan(0);
    expect(bbox6.height).toBeGreaterThan(0);

    await testImage7.scrollIntoViewIfNeeded();
    await expect(testImage7).toBeVisible();
    const bbox7 = await testImage7.boundingBox();
    expect(bbox7.width).toBeGreaterThan(0);
    expect(bbox7.height).toBeGreaterThan(0);

    await testImage8.scrollIntoViewIfNeeded();
    await expect(testImage8).toBeVisible();
    const bbox8 = await testImage8.boundingBox();
    expect(bbox8.width).toBeGreaterThan(0);
    expect(bbox8.height).toBeGreaterThan(0);
});

test('Contact section social links load successfully', async ({ page }) => {
    const facebookURLSelector = 'a[href*="https://www.facebook.com/alphamminc/"]';
    const facebookURL = 'https://www.facebook.com/alphamminc/';
    const linkedinURLSelector = 'a[href*="https://www.linkedin.com/company/alpha-mm-inc/about/"]';
    const linkedinURL = 'https://www.linkedin.com/company/alpha-mm-inc/about/';

    await page.goto('/#contact');
    const facebookElement = page.locator(facebookURLSelector).nth(0);
    const facebookElement2 = page.locator(facebookURLSelector).nth(1);
    await expect(facebookElement).toBeVisible();
    const facebookhref = await facebookElement.getAttribute('href');
    await expect(facebookhref).toContain(facebookURL);
    await expect(facebookElement2).toBeVisible();
    const facebookhref2 = await facebookElement2.getAttribute('href');
    await expect(facebookhref2).toContain(facebookURL);

    await page.goto('/#contact');
    const linkedinElement = page.locator(linkedinURLSelector).nth(0);
    const linkedinElement2 = page.locator(linkedinURLSelector).nth(1);
    await expect(linkedinElement).toBeVisible();
    const linkedinhref = await linkedinElement.getAttribute('href');
    await expect(linkedinhref).toContain(linkedinURL);
    await expect(linkedinElement2).toBeVisible();
    const linkedinhref2 = await linkedinElement2.getAttribute('href');
    await expect(linkedinhref2).toContain(linkedinURL);
});