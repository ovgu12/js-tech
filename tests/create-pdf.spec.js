const { test } = require('@playwright/test');
const PDFDocument = require('pdfkit');
const fs = require('fs');

test('should create a pdf', async ({ page }) => {
  page.emulateMedia({
    media: 'screen',
  });

  await page.goto('https://playwright.dev');

  await page.waitForTimeout(500);

  await page.screenshot({
    path: 'test-results/playwright.png',
    fullPage: true,
  });

  // Generate pdf with pdfkit
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('test-results/playwright-pdfkit.pdf'));
  doc
    .text('Playwright')
    .image('test-results/playwright.png', {
      scale: 0.3,
      align: 'center',
      valign: 'center',
    })
    .end();

  // Create pdf with playwright
  await page.pdf({
    path: 'test-results/playwright.pdf',
    printBackground: true,
    landscape: true,
    displayHeaderFooter: true,
    format: 'A4',
  });

  await page.close();
});
